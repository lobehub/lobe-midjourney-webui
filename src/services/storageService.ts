import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

import { AppSettings } from '@/store/initialState';

class StorageService {
  private storageKey = 'MIDJOURNEY_DATA';
  private settingKey = 'APP_SETTINGS';

  async saveToLocalStorage(state: object) {
    const data = await this.getFromLocalStorage();

    localStorage.setItem(this.storageKey, JSON.stringify({ ...data, ...state }));
  }

  async getFromLocalStorage(key = this.storageKey): Promise<object> {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  async saveToLobeChat(state: object) {
    // TODO: 替换为更好用的 setPluginState 方法
    for (const [key, value] of Object.entries(state)) {
      lobeChat.setPluginState(key, value);
    }
  }

  async setSettings(state: Partial<AppSettings>) {
    const data = await this.getFromLocalStorage(this.settingKey);

    localStorage.setItem(this.settingKey, JSON.stringify({ ...data, ...state }));
  }
}

export const storageService = new StorageService();
