import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { StoreAction, actions } from './action';
import { SettingsState, initialState } from './initialState';

export interface SettingsStore extends SettingsState, StoreAction {}

export const useGlobalStore = createWithEqualityFn<SettingsStore>()(
  devtools((...params) => ({ ...initialState, ...actions(...params) }), {
    name: 'MidjourneyGlobalStore',
  }),
  shallow,
);
