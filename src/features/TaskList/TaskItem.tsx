import { ActionIcon, Image } from '@lobehub/ui';
import { Popconfirm } from 'antd';
import { createStyles } from 'antd-style';
import { Trash } from 'lucide-react';
import { memo } from 'react';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import { MIN_IMAGE_SIZE } from './style';

export const useStyles = createStyles(({ css, token }) => ({
  active: css`
    opacity: 1;
    box-shadow: 0 0 0 2px ${token.colorPrimary};
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

    overflow: hidden;
    flex: none;

    width: ${MIN_IMAGE_SIZE}px;
    height: ${MIN_IMAGE_SIZE}px;
    margin-block: 0 !important;

    opacity: 0.75;
    border-radius: ${token.borderRadiusLG}px;

    transition: all 0.2s ease-in-out;
  `,
}));

interface TaskItemProps {
  id: string;
}

const TaskItem = memo<TaskItemProps>(({ id }) => {
  const task = useMidjourneyStore(midjourneySelectors.getTaskById(id));
  const [removeTask, activeTask, isActive] = useMidjourneyStore((s) => [
    s.removeTask,
    s.activeTask,
    midjourneySelectors.isTaskActive(id)(s),
  ]);

  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.image, isActive && styles.active, styles.editableImage)}>
      <Image
        actions={
          <Popconfirm
            arrow={false}
            onConfirm={(e) => {
              e?.stopPropagation();
              removeTask(id);
            }}
            title={'Are you sure you want to delete this image?'}
          >
            <ActionIcon className={styles.deleteButton} glass icon={Trash} size={'small'} />
          </Popconfirm>
        }
        alt={task?.prompt}
        isLoading={task?.status === 'IN_PROGRESS'}
        onClick={() => {
          activeTask(id);
        }}
        preview={false}
        src={task?.imageUrl}
      />
    </div>
  );
});

export default TaskItem;
