import { MidjourneyTask } from '../services/Midjourney';
import { AppState } from './initialState';

export const mockState: AppState = {
  prompts:
    'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond --ar 1:1 --v 6',
  task: {
    action: 'IMAGINE',
    description:
      '/imagine cute little duckling, soft fluffy feathers, bright eyes, standing by a pond --ar 1:1 --v 5',
    failReason: null,
    finishTime: null,
    id: '1704863044098680',
    imageUrl: null,
    progress: '0%',
    prompt:
      'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond --ar 1:1 --v 5',
    promptEn:
      'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond --ar 1:1 --v 5',
    properties: {
      discordInstanceId: '1174150905801736255',
      nonce: '1466056237819969536',
      notifyHook: null,
    },
    startTime: 1_704_863_044_128,
    state: null,
    status: 'SUBMITTED',
    submitTime: 1_704_863_044_102,
  } as unknown as MidjourneyTask,
  taskId: '1704863044098680',
};
