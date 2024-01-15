'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { App } from '@/app/App';
import { useStore } from '@/store';

import './global.css';

const InLobeChatPage = memo(() => {
  const [useInitApp] = useStore((s) => [s.useInitApp]);

  useInitApp();

  return (
    <Flexbox padding={16} style={{ height: '100vh' }}>
      <App />
    </Flexbox>
  );
});

export default InLobeChatPage;
