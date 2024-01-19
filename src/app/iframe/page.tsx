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
    <Flexbox gap={12} padding={'0 4px 8px'} style={{ height: '100vh' }}>
      <PromptInput />
      <TaskList />
      <ImagePreview />
    </Flexbox>
  );
});

export default InLobeChatPage;
