import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

import TaskItem from './TaskItem';

const TaskList = memo(() => {
  const tasks = useStore((s) => s.tasks.map((t) => t.id), isEqual);
  const hasMultiTasks = useStore(midjourneySelectors.hasMultiTasks);

  return (
    hasMultiTasks && (
      <Flexbox gap={6} height={64} horizontal>
        {tasks.map((task) => (
          <TaskItem id={task} key={task} />
        ))}
      </Flexbox>
    )
  );
});

export default TaskList;
