import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ImagePreview from '@/features/Preview';
import PromptInput from '@/features/PromptEditor';
import TaskList from '@/features/TaskList';
import { useMidjourneyStore } from '@/store/midjourney';

import Header from './Header';

const Home = memo(() => {
  const theme = useTheme();

  const [useInitApp] = useMidjourneyStore((s) => [s.useInitApp]);

  useInitApp();

  return (
    <Flexbox
      align={'center'}
      padding={16}
      style={{ background: theme.colorBgLayout, height: '100vh' }}
    >
      <Flexbox gap={16} height={'100%'} style={{ maxWidth: 1152 }} width={'100%'}>
        <Header />
        <Flexbox
          gap={12}
          height={'100%'}
          style={{ maxHeight: 'var(--vh)', overflow: 'hidden' }}
          width={'100%'}
        >
          <PromptInput />
          <ImagePreview />
          <TaskList />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default Home;
