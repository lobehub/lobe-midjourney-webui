import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

import Guide from './Guide';
import ImagePreview from './Image';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    position: relative;
    overflow: hidden;
    background: ${token.colorFillTertiary};
  `,
  process: css`
    position: absolute;
    right: 0;
    bottom: -4px;
    left: 0;

    width: 100%;

    > .ant-progress-line {
      margin-bottom: 0;
      margin-inline-end: 0;
    }
  `,
}));

const Preview = memo(() => {
  const [progress, taskLoading, inLobeChat] = useStore((s) => [
    midjourneySelectors.currentTaskProgress(s),
    midjourneySelectors.isCurrentTaskRunning(s),
    midjourneySelectors.isInLobeChat(s),
  ]);

  const { styles, theme } = useStyles();
  const currentTask = useStore(midjourneySelectors.currentActiveTask);

  const showImage = taskLoading || currentTask?.imageUrl;
  return (
    <Flexbox
      className={styles.container}
      flex={1}
      gap={8}
      height={'calc(100vh - 80px - 64px - 8*2px - 2*16px )'}
      padding={16}
      style={{ borderRadius: inLobeChat ? 8 : 24 }}
    >
      {showImage ? (
        <ImagePreview />
      ) : inLobeChat ? null : (
        <Center height={'100%'} width={'100%'}>
          <Guide />
        </Center>
      )}
      {taskLoading && progress !== 100 && (
        <div className={styles.process}>
          <Progress
            percent={progress}
            showInfo={false}
            size={['100%', 16]}
            strokeColor={{ from: theme.blue7, to: theme.green7 }}
            strokeLinecap={'square'}
          />
        </div>
      )}
    </Flexbox>
  );
});

export default Preview;
