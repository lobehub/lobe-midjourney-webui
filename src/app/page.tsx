'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ImagePreview from '@/features/ImagePreview';
import PromptInput from '@/features/Input';
import { useStore } from '@/store';

import './global.css';

const App = memo(() => {
  const [useInitApp, inLobeChat] = useStore((s) => [s.useInitApp, s.inLobeChat]);

  useInitApp();

  const theme = useTheme();

  return (
    <Flexbox
      gap={8}
      padding={16}
      style={{ background: inLobeChat ? undefined : theme.colorBgLayout, height: '100vh' }}
    >
      <PromptInput />
      <ImagePreview />
    </Flexbox>
  );
});

export default App;
