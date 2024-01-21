import { Viewport } from 'next';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';
import { isRtlLang } from 'rtl-detect';

import StyleRegistry from '@/components/StyleRegistry';
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale';
import { LOBE_THEME_APPEARANCE } from '@/const/theme';
import Layout from '@/layouts';

const RootLayout = ({ children }: PropsWithChildren) => {
  // get default theme config to use with ssr
  const cookieStore = cookies();
  const appearance = cookieStore.get(LOBE_THEME_APPEARANCE);
  const lang = cookieStore.get(LOBE_LOCALE_COOKIE);
  const direction = isRtlLang(lang?.value || DEFAULT_LANG) ? 'rtl' : 'ltr';

  return (
    <html dir={direction} lang={lang?.value || DEFAULT_LANG}>
      <body>
        <StyleRegistry>
          <Layout defaultAppearance={appearance?.value} defaultLang={lang?.value}>
            {children}
          </Layout>
        </StyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

export { default as metadata } from './metadata';

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  themeColor: [
    { color: '#f8f8f8', media: '(prefers-color-scheme: light)' },
    { color: '#000', media: '(prefers-color-scheme: dark)' },
  ],
  userScalable: false,
  viewportFit: 'cover',
  width: 'device-width',
};
