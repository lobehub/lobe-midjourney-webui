/**
 * the client config is only used in Vercel deployment
 */

/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_USE_MOCK_DATA?: string;

      NEXT_PUBLIC_ANALYTICS_VERCEL?: string;
      NEXT_PUBLIC_VERCEL_DEBUG?: string;

      NEXT_PUBLIC_ANALYTICS_PLAUSIBLE?: string;
      NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string;
      NEXT_PUBLIC_PLAUSIBLE_SCRIPT_BASE_URL?: string;

      NEXT_PUBLIC_I18N_DEBUG: string;
      NEXT_PUBLIC_I18N_DEBUG_BROWSER: string;
      NEXT_PUBLIC_I18N_DEBUG_SERVER: string;

      NEXT_PUBLIC_DEVELOPER_DEBUG: string;
    }
  }
}

export const getClientConfig = () => ({
  useMockData: process.env.NEXT_PUBLIC_USE_MOCK_DATA !== undefined,

  // Vercel Analytics
  enableVercelAnalytics: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL === '1',
  VERCEL_DEBUG: process.env.NEXT_PUBLIC_VERCEL_DEBUG === '1',

  // Plausible Analytics
  enablePlausibleAnalytics: process.env.NEXT_PUBLIC_ANALYTICS_PLAUSIBLE === '1',
  PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  PLAUSIBLE_SCRIPT_BASE_URL:
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_BASE_URL || 'https://plausible.io',

  // i18n debug mode
  I18N_DEBUG: process.env.NEXT_PUBLIC_I18N_DEBUG === '1',
  I18N_DEBUG_BROWSER: process.env.NEXT_PUBLIC_I18N_DEBUG_BROWSER === '1',
  I18N_DEBUG_SERVER: process.env.NEXT_PUBLIC_I18N_DEBUG_SERVER === '1',

  // developer debug mode
  DEBUG_MODE: process.env.NEXT_PUBLIC_DEVELOPER_DEBUG === '1',
});
