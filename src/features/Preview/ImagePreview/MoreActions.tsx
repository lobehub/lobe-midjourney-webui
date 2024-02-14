import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useMinimode } from '@/hooks/useMinimode';

import DeleteButton from './DeleteButton';
import DetaillButton from './DetaillButton';
import RerollButton from './RerollButton';

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
      {!hideReroll && taskId && <RerollButton taskId={taskId} />}
      {taskId && <DetaillButton taskId={taskId} />}
      <DeleteButton taskId={taskId} />
    </Flexbox>
  );
});

export default MoreActions;
