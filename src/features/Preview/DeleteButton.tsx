import { ActionIcon } from '@lobehub/ui';
import { Popconfirm } from 'antd';
import { createStyles } from 'antd-style';
import { Trash } from 'lucide-react';
import { rgba } from 'polished';
import { memo } from 'react';

import { useMinimode } from '@/hooks/useMinimode';
import { useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, token }) => ({
  button: css`
    background: ${rgba(token.colorError, 0.2)};
    border: 1px solid ${rgba(token.colorText, 0.2)};
  `,
}));

export const DeleteButton = memo<{ className?: string; taskId?: string }>(({ taskId }) => {
  const removeTask = useMidjourneyStore((s) => s.removeTask);
  const { styles } = useStyles();
  const { isMini } = useMinimode();
  return (
    <Popconfirm
      arrow={false}
      onConfirm={(e) => {
        e?.stopPropagation();
        if (!taskId) return;
        removeTask(taskId);
      }}
      placement={'bottomLeft'}
      title={'Are you sure you want to delete this image?'}
    >
      <ActionIcon
        active
        className={styles.button}
        glass
        icon={Trash}
        size={isMini ? 'small' : 'normal'}
      />
    </Popconfirm>
  );
});

export default DeleteButton;
