import { ActionIcon } from '@lobehub/ui';
import { App, Dropdown, MenuProps } from 'antd';
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
  const [removeTask, removeAllTasks] = useMidjourneyStore((s) => [s.removeTask, s.removeAllTasks]);
  const { styles } = useStyles();
  const { isMini } = useMinimode();
  const { t } = useTranslation('common');
  const { modal } = App.useApp();

  const items: MenuProps['items'] = [
    {
      key: 'deleteCurrent',
      label: t('images.deleteCurrent'),
      onClick: () => {
        if (!taskId) return;
        modal.confirm({
          centered: true,
          okButtonProps: { danger: true },
          onOk: () => {
            removeTask(taskId);
          },
          title: t('images.deleteConfirm'),
        });
      },
    },
    {
      key: 'deleteAll',
      label: t('images.deleteAll'),
      onClick: () => {
        modal.confirm({
          centered: true,
          okButtonProps: { danger: true },
          onOk: () => {
            removeAllTasks();
          },
          title: t('images.deleteAllConfirm'),
        });
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <ActionIcon
        active
        className={styles.button}
        glass
        icon={Trash}
        size={isMini ? 'small' : 'normal'}
        title={t('images.delete')}
      />
    </Dropdown>
  );
});

export default DeleteButton;
