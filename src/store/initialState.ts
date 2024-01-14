import { MidjourneyTask } from '../services/Midjourney';

export interface AppState {
  inLobeChat?: boolean;
  prompts: string;
  task?: MidjourneyTask;
  taskId?: string;
  taskImageUrl?: string;
  taskLoading: boolean;
}

export const initialState: AppState = {
  inLobeChat: false,
  prompts: '',
  taskId: undefined,
  taskImageUrl: undefined,
  taskLoading: false,
};
