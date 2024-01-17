import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

import ImagePreview from './Image';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    overflow: hidden;
    background: ${token.colorFillTertiary};
  `,
}));

const Preview = memo(() => {
  const [progress, taskLoading, inLobeChat] = useStore((s) => [
    midjourneySelectors.currentTaskProgress(s),
    midjourneySelectors.isCurrentTaskRunning(s),
    s.inLobeChat,
  ]);

  const { styles } = useStyles();
  const currentTask = useStore(midjourneySelectors.currentActiveTask);

  return (
    (taskLoading || currentTask?.imageUrl) && (
      <Flexbox
        className={styles.container}
        flex={1}
        gap={8}
        height={'calc(100vh - 80px - 64px - 8*2px - 2*16px )'}
        padding={16}
        style={{ borderRadius: inLobeChat ? 8 : 24 }}
      >
        <ImagePreview />
        {progress !== 100 && <Progress percent={progress} />}
      </Flexbox>
    )
  );
});

export default Preview;
