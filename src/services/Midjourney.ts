import { MidjourneyTask } from '@/types/task';

interface DescribeDTO {
  base64: string;
  notifyHook?: string;
  state?: string;
}
interface DescribeResponse {
  code: 1;
  description: string;
  result: number;
}

interface SimpleChangeDTO {
  index: number;
  taskId: string;
  type: 'UPSCALE' | 'VARIATION';
}
interface SimpleChangeResponse {
  code: 1;
  description: string;
  result: number;
}

interface TaskConditionDTO {
  ids?: string[];
}

type TaskListResponse = MidjourneyTask[];

type Account = {
  // ...账号的属性
};

type AccountResponse = Account;

interface ImagineDTO {
  base64Array?: [];
  notifyHook?: string;
  prompt: string;
  state?: string;
}

interface ImagineResponse {
  code: 1;
  description: string;
  result: string;
}

class MidjourneyService {
  baseURL = '/api/midjourney';

  private async get<U>(path: string) {
    const res = await fetch(`${this.baseURL}?path=${encodeURIComponent(path)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    return res.json() as Promise<U>;
  }

  private async post<T>(path: string, data?: T) {
    const res = await fetch(`${this.baseURL}?path=${encodeURIComponent(path)}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    return res.json();
  }

  async createImagineTask({ prompt, base64Array }: ImagineDTO) {
    const data: ImagineResponse = await this.post('/mj/submit/imagine', { base64Array, prompt });

    return data.result;
  }

  async createDescribeTask({ base64, notifyHook, state }: DescribeDTO) {
    const data: DescribeResponse = await this.post('/mj/submit/describe', {
      base64,
      notifyHook,
      state,
    });
    return data.result;
  }

  async createSimpleChangeTask({ taskId, index, type }: SimpleChangeDTO) {
    // e.g. 1320098173412546 U2
    const content = `${taskId} ${type[0]}${index}`;

    const data: SimpleChangeResponse = await this.post('/mj/submit/simple-change', { content });
    return data.result;
  }

  async listTasks() {
    const data: TaskListResponse = await this.get('/mj/task/list');
    return data;
  }

  async listTasksByCondition({ ids }: TaskConditionDTO) {
    const data: TaskListResponse = await this.post('/mj/task/list-by-condition', {
      ids,
    });
    return data;
  }

  async getTaskQueue() {
    const data: TaskListResponse = await this.get('/mj/task/queue');
    return data;
  }

  async getTaskById(id: string) {
    const data: MidjourneyTask = await this.get(`/mj/task/${id}/fetch`);
    return data;
  }

  async listAccounts() {
    const data: AccountResponse[] = await this.get('/mj/account/list');
    return data;
  }

  async getAccountById(id: string) {
    const data: Account = await this.get(`/mj/account/${id}/fetch`);
    return data;
  }
}

export const midjourneyService = new MidjourneyService();
