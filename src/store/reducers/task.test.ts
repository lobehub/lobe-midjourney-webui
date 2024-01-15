import { describe, expect, it } from 'vitest';

import { MidjourneyTask } from '@/types/task';

import {
  AddTaskAction,
  BatchUpdateTasksAction,
  DeleteTaskAction,
  UpdateTaskAction,
  tasksReducer,
} from './task';

describe('tasksReducer', () => {
  it('should add a task', () => {
    const initialState: MidjourneyTask[] = [];
    const taskToAdd = {
      id: '1',
    } as MidjourneyTask;
    const addAction: AddTaskAction = { task: taskToAdd, type: 'addTask' };

    const newState = tasksReducer(initialState, addAction);
    expect(newState).toEqual([taskToAdd]);
  });

  it('should delete a task', () => {
    const initialState = [{ id: '1' }, { id: '2' }] as MidjourneyTask[];
    const deleteAction: DeleteTaskAction = { id: '1', type: 'deleteTask' };

    const newState = tasksReducer(initialState, deleteAction);
    expect(newState).toEqual([{ id: '2' }]);
  });

  it('should update a task', () => {
    const initialState = [{ description: 'Old description', id: '1' }] as MidjourneyTask[];
    const updateAction: UpdateTaskAction = {
      id: '1',
      task: { description: 'New description' },
      type: 'updateTask',
    };

    const newState = tasksReducer(initialState, updateAction);
    expect(newState[0].description).toBe('New description');
  });

  it('should handle batch updates', () => {
    const initialState = [
      { description: 'Task 1', id: '1' },
      { description: 'Task 2', id: '2' },
    ] as MidjourneyTask[];
    const batchUpdateAction: BatchUpdateTasksAction = {
      tasks: [
        { description: 'Updated Task 1', id: '1' },
        { description: 'Updated Task 2', id: '2' },
      ],
      type: 'batchUpdateTasks',
    };

    const newState = tasksReducer(initialState, batchUpdateAction);
    expect(newState).toEqual([
      { description: 'Updated Task 1', id: '1' },
      { description: 'Updated Task 2', id: '2' },
    ]);
  });

  // Additional tests can be written for edge cases, like updating a non-existing task, etc.
});
