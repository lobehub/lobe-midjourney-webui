import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StoreAction, actions } from './action';
import { AppState, initialState } from './initialState';

export interface Store extends AppState, StoreAction {}

export const useStore = create<Store>()(
  devtools((...params) => ({ ...initialState, ...actions(...params) }), {
    name: 'MidjourneyStore',
  }),
);
