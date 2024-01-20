'use client';

import { ThemeAppearance } from 'antd-style';
import { ReactNode, memo } from 'react';

import Analytics from '@/components/Analytics';

import Locale from './Locale';
import AppTheme from './Theme';

export interface LayoutProps {
  children?: ReactNode;
  defaultAppearance?: ThemeAppearance;
  defaultLang?: string;
}

const Layout = memo<LayoutProps>(({ defaultLang, children, defaultAppearance }) => {
  return (
    <>
      <Locale defaultLang={defaultLang}>
        <AppTheme defaultAppearance={defaultAppearance}>{children}</AppTheme>
      </Locale>
      <Analytics />
    </>
  );
});

export default Layout;
