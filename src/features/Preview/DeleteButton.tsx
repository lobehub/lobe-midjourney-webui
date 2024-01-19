import { ActionIcon } from '@lobehub/ui';
import { Popconfirm } from 'antd';
import { Trash } from 'lucide-react';
import { memo } from 'react';

import { useMinimode } from '@/hooks/useMinimode';
import { useMidjourneyStore } from '@/store/midjourney';

export const DeleteButton = memo<{ className?: string; taskId?: string }>(
  ({ taskId, className }) => {
    const removeTask = useMidjourneyStore((s) => s.removeTask);
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
          className={className}
          glass
          icon={Trash}
          size={isMini ? 'small' : 'normal'}
        />
      </Popconfirm>
    );
  },
);

export default DeleteButton;
