import { CSSProperties, memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import ImagePreview from 'src/features/Preview';

import PromptInput from '@/features/Input';
import TaskList from '@/features/TaskList';

interface AppProps {
  style?: CSSProperties;
}
export const App = memo<AppProps>(({ style }) => {
  return (
    <Flexbox gap={8} style={style}>
      <PromptInput />
      <TaskList />
      <ImagePreview />
    </Flexbox>
  );
});
