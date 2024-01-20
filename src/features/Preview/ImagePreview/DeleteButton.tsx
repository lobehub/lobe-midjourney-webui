import { ActionIcon } from '@lobehub/ui';
import { Popconfirm } from 'antd';
import { createStyles } from 'antd-style';
import { Trash } from 'lucide-react';
import { rgba } from 'polished';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('common');

  return (
    <Popconfirm
      arrow={false}
      onConfirm={(e) => {
        e?.stopPropagation();
        if (!taskId) return;
        removeTask(taskId);
      }}
      placement={'bottomLeft'}
      title={t('images.deleteConfirm')}
    >
      <ActionIcon
        active
        className={styles.button}
        glass
        icon={Trash}
        size={isMini ? 'small' : 'normal'}
        title={t('images.delete')}
      />
    </Popconfirm>
  );
});

export default DeleteButton;
