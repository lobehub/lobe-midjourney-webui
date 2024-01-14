'use client';

import { ConfigProvider, NeutralColors, PrimaryColors, ThemeProvider } from '@lobehub/ui';
import { ThemeAppearance } from 'antd-style';
import Image from 'next/image';
import { ReactNode, memo } from 'react';

import { LOBE_THEME_APPEARANCE } from '@/const/theme';
import { setCookie } from '@/utils/cookie';

export interface AppThemeProps {
  children?: ReactNode;
  defaultAppearance?: ThemeAppearance;
  defaultNeutralColor?: NeutralColors;
  defaultPrimaryColor?: PrimaryColors;
}

const AppTheme = memo<AppThemeProps>(
  ({ children, defaultAppearance, defaultPrimaryColor, defaultNeutralColor }) => {
    return (
      <ThemeProvider
        customTheme={{
          neutralColor: defaultNeutralColor,
          primaryColor: defaultPrimaryColor,
        }}
        defaultAppearance={defaultAppearance}
        onAppearanceChange={(appearance) => {
          setCookie(LOBE_THEME_APPEARANCE, appearance);
        }}
        themeMode={'auto'}
      >
        <ConfigProvider config={{ imgAs: Image } as any}>{children}</ConfigProvider>
      </ThemeProvider>
    );
  },
);

export default AppTheme;
