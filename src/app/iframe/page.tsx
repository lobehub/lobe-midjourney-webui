'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import PromptInput from '@/features/Input';
import ImagePreview from '@/features/Preview';
import TaskList from '@/features/TaskList';
import { useMidjourneyStore } from '@/store/midjourney';

import './global.css';

const InLobeChatPage = memo(() => {
  const [useInitApp] = useMidjourneyStore((s) => [s.useInitApp]);

  useInitApp();

  return (
    <Flexbox gap={12} style={{ height: '100dvh' }}>
      <PromptInput />
      <ImagePreview />
      <TaskList />
    </Flexbox>
  );
});

export default InLobeChatPage;
