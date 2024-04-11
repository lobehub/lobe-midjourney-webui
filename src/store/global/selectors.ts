import { SettingsStore } from './store';

export const proxyAPISecret = (s: SettingsStore) => s.settings.MIDJOURNEY_PROXY_API_SECRET;
export const proxyURL = (s: SettingsStore) => s.settings.MIDJOURNEY_PROXY_URL;

export const settingsSelectors = {
  proxyAPISecret,
  proxyURL,
};
