import { Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import { useMinimode } from '@/hooks/useMinimode';
import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import { MIN_IMAGE_SIZE, MIN_IMAGE_SIZE_MOBILE } from './style';

export const useStyles = createStyles(({ css, token }, size: number) => ({
  active: css`
    opacity: 1;
    box-shadow: 0 0 0 2px ${token.colorPrimary};
  `,
  editableImage: css`
    background: ${token.colorBgContainer};
    border: 1px solid ${token.colorBorderSecondary};
  `,
  image: css`
    cursor: pointer;

    overflow: hidden;
    flex: none;

    width: ${size}px;
    height: ${size}px;
    margin-block: 0 !important;

    opacity: 0.75;
    border-radius: ${token.borderRadiusLG}px;

    transition: all 0.2s ease-in-out;

    img {
      min-width: ${size}px !important;
      max-width: ${size}px !important;
      min-height: ${size}px !important;
      max-height: ${size}px !important;
    }
  `,
}));

interface TaskItemProps {
  id: string;
}

const TaskItem = memo<TaskItemProps>(({ id }) => {
  const task = useMidjourneyStore(midjourneySelectors.getTaskById(id));
  const [activeTask, isActive] = useMidjourneyStore((s) => [
    s.activeTask,
    midjourneySelectors.isTaskActive(id)(s),
  ]);
  const { isMini } = useMinimode();
  const size = isMini ? MIN_IMAGE_SIZE_MOBILE : MIN_IMAGE_SIZE;
  const { cx, styles } = useStyles(size);

  return (
    <div className={cx(styles.image, isActive && styles.active, styles.editableImage)}>
      <Image
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
