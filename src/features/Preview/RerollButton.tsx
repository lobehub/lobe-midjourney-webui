import { ActionIcon } from '@lobehub/ui';
import { RefreshCwIcon } from 'lucide-react';
import { memo } from 'react';

import { useMinimode } from '@/hooks/useMinimode';
import { useMidjourneyStore } from '@/store/midjourney';

export const RerollButton = memo<{ className?: string; taskId?: string }>(
  ({ taskId, className }) => {
    const createSimpleChangeTask = useMidjourneyStore((s) => s.createChangeTask);
    const { isMini } = useMinimode();
    return (
      <ActionIcon
        active
        className={className}
        glass
        icon={RefreshCwIcon}
        onClick={(e) => {
          e.stopPropagation();
          if (!taskId) return;
          createSimpleChangeTask({ action: 'REROLL', taskId: taskId });
        }}
        size={isMini ? 'small' : 'normal'}
      />
    );
  },
);

export default RerollButton;
