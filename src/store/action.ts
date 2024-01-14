import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import useSWR, { SWRResponse } from 'swr';
import { StateCreator } from 'zustand';

import { Store } from '.';
import { MidjourneyTask, midjourneyService } from '../services/Midjourney';
import { mockState } from './_mockdata';
import { AppState, initialState } from './initialState';

interface MJFunction {
  prompts: string;
}

export interface StoreAction {
  createImagineTask: () => Promise<void>;
  updateAppState: (state: Partial<AppState>) => void;
  updatePrompts: (input: string) => void;
  useInitApp: () => SWRResponse<AppState | undefined>;
}

export const actions: StateCreator<Store, [['zustand/devtools', never]], [], StoreAction> = (
  set,
  get,
) => ({
  ...initialState,
  createImagineTask: async () => {
    const { updateAppState } = get();
    const taskId = await midjourneyService.createImagineTask({ prompt: get().prompts });

    const task = await midjourneyService.getTaskById(taskId);

    updateAppState({ task, taskId, taskLoading: true });

    let finalTask: MidjourneyTask;

    while (task.status !== 'SUCCESS') {
      // 每间隔 2s 查询一次任务状态
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const task = await midjourneyService.getTaskById(taskId);

      console.log(`task: ${task.id} [${task.status}] ${task.progress}%`, task.imageUrl);

      if (task.status === 'SUCCESS') {
        finalTask = task;
        break;
      } else {
        updateAppState({ task });
      }
    }

    updateAppState({ task: finalTask!, taskLoading: false });
  },
  updateAppState: (state) => {
    set({ ...state });
    for (const [key, value] of Object.entries(state)) {
      lobeChat.setPluginState(key, value);
    }
  },
  updatePrompts: (data) => {
    set({ prompts: data });
  },
  useInitApp: () => {
    return useSWR(
      'init',
      async () => {
        const payload = await lobeChat.getPluginPayload<MJFunction>();

        // 说明不在 LobeChat 中
        if (!payload) {
          console.log('current not in LobeChat, use mockData to start');

          return mockState;
        }

        if (payload?.name === 'showMJ') {
          const { prompts } = payload.arguments!;

          return { ...payload.state, inLobeChat: true, prompts: payload.state?.prompts || prompts };
        }
      },
      {
        onSuccess: (data: AppState) => {
          if (data) get().updateAppState(data);
        },
        revalidateOnFocus: false,
      },
    );
  },
});
