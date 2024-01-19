'use client';

import { Logo } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Settings from '@/features/Settings';
import { useMidjourneyStore } from '@/store/midjourney';

import { App } from './App';

const Page = memo(() => {
  const [useInitApp] = useMidjourneyStore((s) => [s.useInitApp]);

  useInitApp();

  const theme = useTheme();

  return (
    <Flexbox gap={16} padding={16} style={{ background: theme.colorBgLayout, height: '100vh' }}>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <Logo
          extra={'Midjourney Webui'}
          onClick={() => {
            window.open('https://github.com/lobehub/chat-plugin-midjourney', '_blank');
          }}
          style={{ cursor: 'pointer' }}
          type={'combine'}
        />
        <Settings />
      </Flexbox>
      <App
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </Flexbox>
  );
});

export default Page;
