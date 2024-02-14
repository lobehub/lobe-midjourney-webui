import { ActionIcon, Highlighter, Modal } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Info } from 'lucide-react';
import { rgba } from 'polished';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMinimode } from '@/hooks/useMinimode';
import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, token }) => ({
  button: css`
    background: ${rgba(token.colorBgLayout, 0.5)};
    border: 1px solid ${rgba(token.colorText, 0.2)};
  `,
}));

export const DetaillButton = memo<{ taskId: string }>(({ taskId }) => {
  const currentTask = useMidjourneyStore(midjourneySelectors.getTaskById(taskId));
  const [open, setOpen] = useState(false);
  const { styles } = useStyles();
  const { isMini } = useMinimode();
  const { t } = useTranslation('common');

  return (
    <>
      <ActionIcon
        active
        className={styles.button}
        glass
        icon={Info}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        size={isMini ? 'small' : 'normal'}
        title={t('task.actions.info')}
      />
      <Modal
        footer={null}
        onCancel={() => setOpen(false)}
        open={open}
        title={t('task.actions.info')}
      >
        <Highlighter language={'text'}>{String(currentTask?.promptEn)}</Highlighter>
      </Modal>
    </>
  );
});

export default DetaillButton;
