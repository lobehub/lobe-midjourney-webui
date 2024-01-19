import { createStyles } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import TaskItem from './TaskItem';

export const useStyles = createStyles(({ css, stylish, cx }) => ({
  container: css`
    position: relative;
    overflow: hidden;
    width: 100%;

    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  `,
  scroll: cx(
    stylish.bottomScrollbar,
    css`
      position: relative;
      overflow: auto hidden;
      max-width: 100%;
    `,
  ),
}));

const TaskList = memo(() => {
  const { styles } = useStyles();
  const tasks = useMidjourneyStore((s) => s.tasks.map((t) => t.id), isEqual);
  const hasMultiTasks = useMidjourneyStore(midjourneySelectors.hasMultiTasks);

  if (!hasMultiTasks) return null;

  return (
    <Center className={styles.container}>
      <Flexbox className={styles.scroll} gap={6} horizontal padding={4}>
        {tasks.map((task) => (
          <TaskItem id={task} key={task} />
        ))}
      </Flexbox>
    </Center>
  );
});

export default TaskList;
