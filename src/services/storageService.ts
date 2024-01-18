import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

class StorageService {
  private storageKey = 'MIDJOURNEY_DATA';
  async saveToLocalStorage(state: object) {
    const data = await this.getFromLocalStorage();

    localStorage.setItem(this.storageKey, JSON.stringify({ ...data, ...state }));
  }

  async getFromLocalStorage(): Promise<object> {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  async saveToLobeChat(state: object) {
    // TODO: 替换为更好用的 setPluginState 方法
    for (const [key, value] of Object.entries(state)) {
      lobeChat.setPluginState(key, value);
    }
  }
}

export const storageService = new StorageService();
