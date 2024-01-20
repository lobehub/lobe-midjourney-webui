import { MidjourneyStore } from './store';

const isTasksEmpty = (s: MidjourneyStore) => {
  return s.tasks.length === 0;
};

const getTaskById = (id: string) => (s: MidjourneyStore) => {
  return s.tasks.find((s) => s.id === id);
};

const currentActiveTask = (s: MidjourneyStore) => {
  return s.tasks.find((task) => s.activeTaskId === task.id);
};

const currentTaskProgress = (s: MidjourneyStore) => {
  const task = currentActiveTask(s);
  if (!task) return 0;

  return Number.parseInt(task.progress || '0');
};

const isAnyTaskRunning = (s: MidjourneyStore) => {
  return s.runningTaskIds.length > 0;
};
const isCurrentTaskRunning = (s: MidjourneyStore) => {
  const task = currentActiveTask(s);
  if (!task) return false;
  return s.runningTaskIds.includes(task.id);
};

const isCreatingTaskLoading = (s: MidjourneyStore) => s.createTaskLoading;

const isTaskActive = (id: string) => (s: MidjourneyStore) => {
  return getTaskById(id)(s)?.id === s.activeTaskId;
};
const hasMultiTasks = (s: MidjourneyStore) => s.tasks.length > 1;
const isInLobeChat = (s: MidjourneyStore) => s.inLobeChat;
const isAppInited = (s: MidjourneyStore) => s.appInited;

const showImage = (s: MidjourneyStore) => isCurrentTaskRunning(s) || currentActiveTask(s)?.imageUrl;

const showProgress = (s: MidjourneyStore) => {
  const progress = currentTaskProgress(s);
  return isCurrentTaskRunning(s) && progress !== 100;
};

export const midjourneySelectors = {
  currentActiveTask,
  currentTaskProgress,
  getTaskById,
  hasMultiTasks,
  isAnyTaskRunning,
  isAppInited,
  isCreatingTaskLoading,
  isCurrentTaskRunning,
  isInLobeChat,
  isTaskActive,
  isTasksEmpty,
  showImage,
  showProgress,
};
