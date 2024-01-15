import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import isEqual from 'fast-deep-equal';
import useSWR, { SWRResponse } from 'swr';
import { StateCreator } from 'zustand';

import { ChangeTaskDTO, midjourneyService } from '@/services/Midjourney';
import { TaskDispatch, tasksReducer } from '@/store/reducers/task';
import { MidjourneyTask } from '@/types/task';

import { MidjourneyStore } from '.';
import { AppSettings, AppState, initialState } from './initialState';

interface MJFunction {
  prompts: string;
}

export interface StoreAction {
  activeTask: (id: string) => void;
  createChangeTask: (params: ChangeTaskDTO) => Promise<void>;
  createImagineTask: (shouldActiveTask?: boolean) => Promise<void>;
  dispatchTask: (payload: TaskDispatch) => void;
  pollTaskStatus: (id: string) => Promise<void>;
  removeTask: (id: string) => void;
  toggleTaskLoading: (id: string, loading: boolean) => void;
  updateAppState: (state: Partial<AppState>, action?: any) => void;
  updatePrompts: (input: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  useInitApp: () => SWRResponse<AppState>;
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
    const taskId = await midjourneyService.createChangeTask(params);
    if (!taskId) return;

    const task = await midjourneyService.getTaskById(taskId);

    // 添加任务
    dispatchTask({ task, type: 'addTask' });

    activeTask(taskId);

    await pollTaskStatus(taskId);
  },
  createImagineTask: async (shouldActiveTask = true) => {
    const { dispatchTask, activeTask, pollTaskStatus } = get();
    const taskId = await midjourneyService.createImagineTask({ prompt: get().prompts });
    if (!taskId) return;

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
      get().updateAppState(
        { runningTaskIds: [...get().runningTaskIds, id] },
        { id, loading, type: 'toggleTaskLoading' },
      );
    } else {
      get().updateAppState(
        {
          runningTaskIds: get().runningTaskIds.filter((taskId) => taskId !== id),
        },
        { id, loading, type: 'toggleTaskLoading' },
      );
    }
  },

  updateAppState: (state, action) => {
    set({ ...state }, false, action);

    if (!get().inLobeChat) return;

    // TODO: 替换为更好用的 setPluginState 方法
    for (const [key, value] of Object.entries(state)) {
      lobeChat.setPluginState(key, value);
    }
  },

  updatePrompts: (data) => {
    set({ prompts: data });
  },

  updateSettings: (settings) => {
    set({ settings: { ...get().settings, ...settings } });
  },
  useInitApp: () => {
    return useSWR<AppState>(
      'init',
      async () => {
        const payload = await lobeChat.getPluginPayload<MJFunction>();

        // 说明不在 LobeChat 中
        if (!payload) {
          // 开发环境下，使用 mock 数据
          if (process.env.NODE_ENV === 'development') {
            const { mockState } = await import('./_mockdata');

            return mockState;
          }

          return;
        }

        if (payload?.name === 'showMJ') {
          const { prompts } = payload.arguments!;

          return { ...payload.state, inLobeChat: true, prompts: payload.state?.prompts || prompts };
        }
      },
      {
        onSuccess: (data: AppState) => {
          if (data) get().updateAppState(data, 'initApp');
        },
        revalidateOnFocus: false,
      },
    );
  },
});
