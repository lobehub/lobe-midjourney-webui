import { ActionIcon, Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Trash } from 'lucide-react';
import { memo } from 'react';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import { MIN_IMAGE_SIZE } from './style';

export const useStyles = createStyles(({ css, token }) => ({
  active: css`
    box-shadow: 0 0 0 3px ${token.colorPrimary};
  `,
  deleteButton: css`
    color: #fff;
    background: ${token.colorBgMask};

    &:hover {
      background: ${token.colorError};
    }
  `,
  editableImage: css`
    background: ${token.colorBgContainer};
    border: 1px solid ${token.colorBorderSecondary};
  `,
  image: css`
    cursor: pointer;
    margin-block: 0 !important;
  `,
}));

interface TaskItemProps {
  id: string;
}

const TaskItem = memo<TaskItemProps>(({ id }) => {
  const IMAGE_SIZE = MIN_IMAGE_SIZE;
  const task = useMidjourneyStore(midjourneySelectors.getTaskById(id));
  const [removeTask, activeTask, isActive] = useMidjourneyStore((s) => [
    s.removeTask,
    s.activeTask,
    midjourneySelectors.isTaskActive(id)(s),
  ]);

  const { styles, cx } = useStyles();

  return (
    <Image
      actions={
        <ActionIcon
          className={styles.deleteButton}
          glass
          icon={Trash}
          onClick={(e) => {
            e.stopPropagation();
            removeTask(id);
          }}
          size={'small'}
        />
      }
      alt={task?.prompt}
      isLoading={task?.status === 'IN_PROGRESS'}
      onClick={() => {
        activeTask(id);
      }}
      preview={false}
      size={IMAGE_SIZE}
      src={task?.imageUrl}
      wrapperClassName={cx(styles.image, isActive && styles.active, styles.editableImage)}
    />
  );
});

export default TaskItem;
