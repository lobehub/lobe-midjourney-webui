import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import isEqual from 'fast-deep-equal';
import useSWR, { SWRResponse } from 'swr';
import { StateCreator } from 'zustand';

import { getClientConfig } from '@/config/client';
import { fileService } from '@/services/file';
import { ChangeTaskDTO, midjourneyService } from '@/services/midjourney';
import { storageService } from '@/services/storage';
import { useGlobalStore } from '@/store/global';
import { TaskDispatch, tasksReducer } from '@/store/midjourney/reducers/task';
import { MidjourneyTask } from '@/types/task';

import { MidjourneyStore } from './index';
import { MidjourneyState, initialState } from './initialState';

const { useMockData } = getClientConfig();

interface MJFunction {
  prompts: string;
}

export interface StoreAction {
  activeTask: (id: string) => void;
  createChangeTask: (params: ChangeTaskDTO) => Promise<void>;
  createImagineTask: (shouldActiveTask?: boolean) => Promise<void>;
  dispatchTask: (payload: TaskDispatch) => void;
  pollTaskStatus: (id: string) => Promise<void>;
  removeAllTasks: () => void;
  removeTask: (id: string) => void;
  toggleTaskLoading: (id: string, loading: boolean) => void;
  updateAppState: (state: Partial<MidjourneyState>, action?: any) => void;
  updatePrompts: (input: string) => void;
  uploadImage: (file: File) => Promise<void>;
  useInitApp: () => SWRResponse<MidjourneyState>;
}

export const actions: StateCreator<
  MidjourneyStore,
  [['zustand/devtools', never]],
  [],
  StoreAction
> = (set, get) => ({
  ...initialState,
  activeTask: (id) => {
    get().updateAppState({ activeTaskId: id }, 'activeTaskId');
  },
  createChangeTask: async (params) => {
    const { dispatchTask, activeTask, pollTaskStatus } = get();
    set({ createTaskLoading: true });
    const taskId = await midjourneyService.createChangeTask(params);
    if (!taskId) {
      set({ createTaskLoading: false });
      return;
    }

    const task = await midjourneyService.getTaskById(taskId);

    // 添加任务
    dispatchTask({ task, type: 'addTask' });
    set({ createTaskLoading: false });
    activeTask(taskId);

    await pollTaskStatus(taskId);
  },
  createImagineTask: async (shouldActiveTask = true) => {
    const {
      dispatchTask,
      activeTask,
      pollTaskStatus,
      toggleTaskLoading,
      inLobeChat,
      prompts,
      referenceImageUrl = '',
    } = get();
    set({ createTaskLoading: true });

    const taskId = await midjourneyService.createImagineTask({
      prompt: referenceImageUrl + ' ' + prompts,
    });

    if (!taskId) {
      set({ createTaskLoading: false });
      return;
    }

    // 如果在 LobeChat 中，更新插件消息
    if (inLobeChat) {
      lobeChat.setPluginMessage(prompts, false);
    }

    toggleTaskLoading(taskId, true);
    set({ createTaskLoading: false });
    const task = await midjourneyService.getTaskById(taskId);
    // 添加任务
    dispatchTask({ task, type: 'addTask' });

    // 如果需要激活任务，更新 activeTask
    if (shouldActiveTask) {
      activeTask(taskId);
    }

    await pollTaskStatus(taskId);
  },
  dispatchTask: (payload) => {
    const { tasks, updateAppState } = get();

    const nextTasks = tasksReducer(tasks, payload);

    if (isEqual(tasks, nextTasks)) return;

    updateAppState({ tasks: nextTasks }, { payload, type: `dispatchTasks/${payload.type}` });
  },
  pollTaskStatus: async (taskId) => {
    const { toggleTaskLoading, dispatchTask } = get();
    const task = await midjourneyService.getTaskById(taskId);

    toggleTaskLoading(taskId, true);

    let finalTask: MidjourneyTask | undefined;

    while (task.status !== 'SUCCESS') {
      // 每间隔 2s 查询一次任务状态
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const task = await midjourneyService.getTaskById(taskId);

      console.log(`task: ${task.id} [${task.status}] ${task.progress}%`, task.prompt);

      if (task.status === 'SUCCESS') {
        finalTask = task;
        break;
      } else {
        dispatchTask({ id: task.id, task, type: 'updateTask' });
      }
    }

    toggleTaskLoading(taskId, false);

    if (!finalTask) return;

    dispatchTask({ id: finalTask!.id, task: finalTask, type: 'updateTask' });
  },
  removeAllTasks: () => {
    const tasks = get().tasks;
    for (const task of tasks) get().removeTask(task.id);
  },
  removeTask: (id) => {
    const { dispatchTask, tasks, activeTaskId } = get();

    const index = tasks.findIndex((t) => t.id === id);
    dispatchTask({ id, type: 'deleteTask' });
    if (id !== activeTaskId) return;

    const newItem = get().tasks[index];
    const newIndex = index === 0 ? 0 : index - 1;

    if (newItem) get().activeTask(newItem.id);
    else get().activeTask(tasks[newIndex]?.id || '');
  },
  toggleTaskLoading: (id, loading) => {
    if (loading) {
      set({ runningTaskIds: [...get().runningTaskIds, id] }, false, {
        id,
        loading,
        type: 'toggleTaskLoading',
      });
    } else {
      set(
        {
          runningTaskIds: get().runningTaskIds.filter((taskId) => taskId !== id),
        },
        false,
        { id, loading, type: 'toggleTaskLoading' },
      );
    }
  },

  updateAppState: async (state, action) => {
    set({ ...state }, false, action);

    if (!get().inLobeChat) {
      await storageService.saveToLocalStorage(state);
    }

    await storageService.saveToLobeChat(state);
  },

  updatePrompts: (data) => {
    set({ prompts: data });
  },

  uploadImage: async (file) => {
    const url = await fileService.uploadFile(file);

    if (!url) return;

    get().updateAppState({ referenceImageUrl: url });
  },
  useInitApp: () => {
    return useSWR<MidjourneyState>(
      'init',
      async () => {
        const payload = await lobeChat.getPluginPayload<MJFunction>();

        // 说明不在 LobeChat 中
        if (!payload) {
          // 开发环境下，按需开启 mock 数据
          if (useMockData && process.env.NODE_ENV === 'development') {
            const { mockState } = await import('./_mockdata');
            return mockState;
          }

          const settings = await storageService.getFromLocalStorage('APP_SETTINGS');

          useGlobalStore.setState({ settings });

          return await storageService.getFromLocalStorage();
        }

        if (payload?.name === 'showMJ') {
          const { prompts } = payload.arguments!;

          return {
            ...payload.state,
            inLobeChat: true,
            prompts: payload.state?.prompts || prompts,
            settings: payload.settings,
          };
        }
      },
      {
        onSuccess: (data: MidjourneyState) => {
          set({ appInited: true });
          if (data) get().updateAppState(data, 'initApp');

          // 如果第一次在 LobeChat 中触发插件，则创建 imagine 任务
          const noTask = data.tasks?.length === 0 || !data.tasks;

          if (data.inLobeChat && noTask && !!data.prompts) {
            get().createImagineTask();
          }
        },
        revalidateOnFocus: false,
      },
    );
  },
});
