/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      MIDJOURNEY_PROXY_URL?: string;
      METADATA_BASE_URL?: string;

      IMGUR_CLIENT_ID?: string;
    }
  }
}

// we apply a free imgur app to get a client id
// refs: https://apidocs.imgur.com/
const DEFAULT_IMAGUR_CLIENT_ID = 'e415f320d6e24f9';

export const getServerConfig = () => {
  if (typeof process === 'undefined') {
    throw new TypeError('[Server Config] you are importing a server-only module outside of server');
  }

  return {
    MIDJOURNEY_PROXY_URL: process.env.MIDJOURNEY_PROXY_URL,

    METADATA_BASE_URL: process.env.METADATA_BASE_URL,

    IMGUR_CLIENT_ID: process.env.IMGUR_CLIENT_ID || DEFAULT_IMAGUR_CLIENT_ID,
  };
};
