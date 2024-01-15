'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStore } from '@/store';

import { App } from './App';

const Page = memo(() => {
  const [useInitApp] = useStore((s) => [s.useInitApp]);

  useInitApp();

  const theme = useTheme();

  return (
    <Flexbox
      align={'center'}
      padding={16}
      style={{ background: theme.colorBgLayout, height: '100vh' }}
    >
      <App
        style={{
          height: '100%',
          maxWidth: 1152,
          width: '100%',
        }}
      />
    </Flexbox>
  );
});

export default Page;
