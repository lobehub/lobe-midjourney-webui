import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStore } from '@/store';

import TaskItem from './TaskItem';

const TaskList = memo(() => {
  const tasks = useStore((s) => s.tasks.map((t) => t.id), isEqual);

  return (
    tasks.length > 1 && (
      <Flexbox gap={6} height={64} horizontal>
        {tasks.map((task) => (
          <TaskItem id={task} key={task} />
        ))}
      </Flexbox>
    )
  );
});

export default TaskList;
