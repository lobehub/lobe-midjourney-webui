interface TaskExtra {
  [key: string]: any;
  discordInstanceId: string;

  finalPrompt: string;
  flags: number;
  messageHash: string;
  messageId: string;
  nonce: string;
  notifyHook?: string | null;
  progressMessageId: string;
}

export type TaskActionType = 'IMAGINE' | 'UPSCALE' | 'VARIATION' | 'REROLL' | 'DESCRIBE' | 'BLEND'; // 任务类型

export interface MidjourneyTask {
  action: TaskActionType;
  description: string; // 任务描述
  failReason?: string | null; // 失败原因
  finishTime: number; // 结束时间, 假设是时间戳
  id: string; // ID
  imageUrl: string; // 图片url
  progress: string; // 任务进度
  prompt: string; // 提示词
  promptEn: string; // 提示词-英文
  properties: TaskExtra; // 扩展字段，键值对形式
  startTime: number; // 开始执行时间, 假设是时间戳
  state?: string | null; // 自定义参数
  status: 'NOT_START' | 'SUBMITTED' | 'IN_PROGRESS' | 'FAILURE' | 'SUCCESS'; // 任务状态
  submitTime: number; // 提交时间, 假设是时间戳
}
