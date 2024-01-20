import { MidjourneyTask } from '@/types/task';

export interface AppSettings {
  MIDJOURNEY_PROXY_URL?: string;
}

export interface MidjourneyState {
  activeTaskId?: string;
  appInited?: boolean;
  createTaskLoading?: boolean;
  inLobeChat?: boolean;
  isSettingsModalOpen: boolean;
  prompts: string;
  referenceImageUrl?: string;
  requestError?: { body: string | { type: string }; message: string; status: number };
  runningTaskIds: string[];
  tasks: MidjourneyTask[];
}

export const initialState: MidjourneyState = {
  appInited: false,
  inLobeChat: false,
  isSettingsModalOpen: false,
  prompts: '',
  runningTaskIds: [],
  tasks: [],
};
