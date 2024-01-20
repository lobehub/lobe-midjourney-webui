import { SettingsStore } from './store';

export const proxyURL = (s: SettingsStore) => s.settings.MIDJOURNEY_PROXY_URL;

export const settingsSelectors = {
  proxyURL,
};
