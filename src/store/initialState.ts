import { MidjourneyTask } from '@/types/task';

export interface AppSettings {
  MIDJOURNEY_PROXY_URL?: string;
}

export interface AppState {
  activeTaskId?: string;
  inLobeChat?: boolean;
  isSettingsModalOpen: boolean;
  prompts: string;
  requestError?: { body: string | { type: string }; message: string; status: number };
  runningTaskIds: string[];
  settings: AppSettings;
  tasks: MidjourneyTask[];
}

export const initialState: AppState = {
  inLobeChat: false,
  isSettingsModalOpen: false,
  prompts: '',
  runningTaskIds: [],
  settings: {},
  tasks: [],
};
