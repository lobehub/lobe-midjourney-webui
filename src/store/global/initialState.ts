import { LocaleMode } from '@/types/locale';

export interface AppSettings {
  MIDJOURNEY_PROXY_URL?: string;
}

export interface SettingsState {
  isSettingsModalOpen: boolean;
  language: LocaleMode;
  requestError?: { body: string | { type: string }; message: string; status: number };
  settings: AppSettings;
}

export const initialState: SettingsState = {
  isSettingsModalOpen: false,
  language: 'auto',
  settings: {},
};
