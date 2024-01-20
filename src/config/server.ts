/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      MIDJOURNEY_PROXY_URL?: string;
    }
  }
}

export const getServerConfig = () => {
  if (typeof process === 'undefined') {
    throw new TypeError('[Server Config] you are importing a server-only module outside of server');
  }

  return {
    MIDJOURNEY_PROXY_URL: process.env.MIDJOURNEY_PROXY_URL,
  };
};
