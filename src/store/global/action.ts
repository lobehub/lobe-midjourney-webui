import { StateCreator } from 'zustand';

import { storageService } from '@/services/storage';

import { AppSettings, initialState } from './initialState';
import { SettingsStore } from './store';

export interface StoreAction {
  updateSettings: (settings: Partial<AppSettings>) => void;
}

export const actions: StateCreator<
  SettingsStore,
  [['zustand/devtools', never]],
  [],
  StoreAction
> = (set, get) => ({
  ...initialState,

  updateSettings: (settings) => {
    set({ settings: { ...get().settings, ...settings } });

    storageService.setSettings(settings);
  },
});
