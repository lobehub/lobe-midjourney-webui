import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { StoreAction, actions } from './action';
import { MidjourneyState, initialState } from './initialState';

export interface MidjourneyStore extends MidjourneyState, StoreAction {}

export const useMidjourneyStore = createWithEqualityFn<MidjourneyStore>()(
  devtools((...params) => ({ ...initialState, ...actions(...params) }), {
    name: 'MidjourneyStore',
  }),
  shallow,
);
