import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

import { LOBE_THEME_APPEARANCE } from '@/const/theme';
import Layout from '@/layouts/Theme';

import StyleRegistry from './StyleRegistry';

const RootLayout = ({ children }: PropsWithChildren) => {
  // get default theme config to use with ssr
  const cookieStore = cookies();
  const appearance = cookieStore.get(LOBE_THEME_APPEARANCE);

  return (
    <html>
      <body>
        <StyleRegistry>
          <Layout defaultAppearance={appearance?.value}>{children}</Layout>
        </StyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
