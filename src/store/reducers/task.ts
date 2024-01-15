import { produce } from 'immer';

import { MidjourneyTask } from '@/types/task';

export type AddTaskAction = { task: MidjourneyTask; type: 'addTask' };
export type DeleteTaskAction = { id: string; type: 'deleteTask' };
export type UpdateTaskAction = { id: string; task: Partial<MidjourneyTask>; type: 'updateTask' };
export type BatchUpdateTasksAction = { tasks: Partial<MidjourneyTask>[]; type: 'batchUpdateTasks' };

export type TaskDispatch =
  | AddTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | BatchUpdateTasksAction;

export type TasksState = MidjourneyTask[];

export const tasksReducer = (state: TasksState, payload: TaskDispatch): TasksState => {
  switch (payload.type) {
    case 'addTask': {
      return [...state, payload.task];
    }

    case 'deleteTask': {
      return state.filter((task) => task.id !== payload.id);
    }

    case 'updateTask': {
      return produce(state, (draftState) => {
        const index = draftState.findIndex((task) => task.id === payload.id);
        if (index !== -1) {
          draftState[index] = { ...draftState[index], ...payload.task };
        }
      });
    }

    case 'batchUpdateTasks': {
      return produce(state, (draftState) => {
        for (const updatedTask of payload.tasks) {
          const index = draftState.findIndex((task) => task.id === updatedTask.id);
          if (index !== -1) {
            draftState[index] = { ...draftState[index], ...updatedTask };
          }
        }
      });
    }
  }
};
