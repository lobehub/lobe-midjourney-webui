import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import DeleteButton from '@/features/Preview/ImagePreview/DeleteButton';
import RerollButton from '@/features/Preview/ImagePreview/RerollButton';
import { useMinimode } from '@/hooks/useMinimode';

const useStyles = createStyles(({ css, responsive }) => {
  return {
    actions: css`
      position: absolute;
      top: 16px;
      right: 16px;

      opacity: 0;

      transition: opacity 0.3s ease-in-out;

      ${responsive.mobile} {
        top: 8px;
        right: 8px;
      }
    `,
  };
});

const MoreActions = memo<{ hideReroll?: boolean; taskId?: string }>(({ taskId, hideReroll }) => {
  const { cx, styles } = useStyles();

  const { isMobile } = useMinimode();

  return (
    <Flexbox
      className={cx('actions', styles.actions)}
      gap={4}
      horizontal
      style={isMobile ? { opacity: 1 } : {}}
    >
      {!hideReroll && <RerollButton taskId={taskId} />}
      <DeleteButton taskId={taskId} />
    </Flexbox>
  );
});

export default MoreActions;
