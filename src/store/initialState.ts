import { MidjourneyTask } from '@/types/task';

export interface AppState {
  activeTaskId?: string;
  inLobeChat?: boolean;
  prompts: string;
  runningTaskIds: string[];
  tasks: MidjourneyTask[];
}

export const initialState: AppState = {
  inLobeChat: false,
  prompts: '',
  runningTaskIds: [],

  tasks: [],
};
