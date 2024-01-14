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
  content: string;
  notifyHook?: string;
  state?: string;
}
interface SimpleChangeResponse {
  code: 1;
  description: string;
  result: number;
}

interface TaskConditionDTO {
  ids?: string[];
}
export interface MidjourneyTask {
  action: 'IMAGINE' | 'UPSCALE' | 'VARIATION' | 'REROLL' | 'DESCRIBE' | 'BLEND'; // 任务类型
  description: string; // 任务描述
  failReason: string; // 失败原因
  finishTime: number; // 结束时间, 假设是时间戳
  id: string; // ID
  imageUrl: string; // 图片url
  progress: string; // 任务进度
  prompt: string; // 提示词
  promptEn: string; // 提示词-英文
  properties: Record<string, any>; // 扩展字段，键值对形式
  startTime: number; // 开始执行时间, 假设是时间戳
  state: string; // 自定义参数
  status: 'NOT_START' | 'SUBMITTED' | 'IN_PROGRESS' | 'FAILURE' | 'SUCCESS'; // 任务状态
  submitTime: number; // 提交时间, 假设是时间戳
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
  baseURL = '/api';

  private async get<U>(url: string) {
    const res = await fetch(this.baseURL + url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    return res.json() as Promise<U>;
  }

  private async post<T>(url: string, data?: T) {
    const res = await fetch(this.baseURL + url, {
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

  async createSimpleChangeTask({ content, notifyHook, state }: SimpleChangeDTO) {
    const data: SimpleChangeResponse = await this.post('/mj/submit/simple-change', {
      content,
      notifyHook,
      state,
    });
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
