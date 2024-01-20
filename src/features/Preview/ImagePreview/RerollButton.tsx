import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { RefreshCwIcon } from 'lucide-react';
import { rgba } from 'polished';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useMinimode } from '@/hooks/useMinimode';
import { useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, token }) => ({
  button: css`
    background: ${rgba(token.colorBgLayout, 0.5)};
    border: 1px solid ${rgba(token.colorText, 0.2)};
  `,
}));

export const RerollButton = memo<{ taskId?: string }>(({ taskId }) => {
  const createSimpleChangeTask = useMidjourneyStore((s) => s.createChangeTask);
  const { styles } = useStyles();
  const { isMini } = useMinimode();
  const { t } = useTranslation('common');

  return (
    <ActionIcon
      active
      className={styles.button}
      glass
      icon={RefreshCwIcon}
      onClick={(e) => {
        e.stopPropagation();
        if (!taskId) return;
        createSimpleChangeTask({ action: 'REROLL', taskId: taskId });
      }}
      size={isMini ? 'small' : 'normal'}
      title={t('task.actions.reroll')}
    />
  );
});

export default RerollButton;
