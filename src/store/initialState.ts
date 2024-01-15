import { MidjourneyTask } from '@/types/task';

export interface AppSettings {
  MIDJOURNEY_API_URL?: string;
}

export interface AppState {
  activeTaskId?: string;
  inLobeChat?: boolean;
  isSettingsModalOpen: boolean;
  prompts: string;
  requestError?: { type: string };
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
