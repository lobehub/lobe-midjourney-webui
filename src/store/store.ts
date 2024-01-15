import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { StoreAction, actions } from './action';
import { AppState, initialState } from './initialState';

export interface MidjourneyStore extends AppState, StoreAction {}

export const useStore = createWithEqualityFn<MidjourneyStore>()(
  devtools((...params) => ({ ...initialState, ...actions(...params) }), {
    name: 'MidjourneyStore',
  }),
  shallow,
);
