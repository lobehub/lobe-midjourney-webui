import { useSize } from 'ahooks';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useEffect, useRef } from 'react';
import { Center } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import Guide from './Guide';
import ImagePreview from './Image';

const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => ({
  container: css`
    position: relative;
    overflow: hidden;
  `,
  process: cx(
    // @ts-ignore
    stylish.blur,
    css`
      position: absolute;
      z-index: 100;

      padding: 8px;

      background: ${token.colorFillTertiary};
      border-radius: 50%;
      .${prefixCls}-progress-text {
        font-family: ${token.fontFamilyCode};
      }
    `,
  ),
}));

const Preview = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  const [progress, taskLoading, inLobeChat] = useMidjourneyStore((s) => [
    midjourneySelectors.currentTaskProgress(s),
    midjourneySelectors.isCurrentTaskRunning(s),
    midjourneySelectors.isInLobeChat(s),
  ]);
  const { styles } = useStyles();
  const currentTask = useMidjourneyStore(midjourneySelectors.currentActiveTask);

  const showImage = taskLoading || currentTask?.imageUrl;
  const showProgress = taskLoading && progress !== 100;

  useEffect(() => {
    if (!size) return;
    const maxSize = size.width > size.height ? size.height : size.width;
    document.documentElement.style.setProperty('--max', `${maxSize}px`);
  }, [size]);

  return (
    <Center className={styles.container} flex={1} gap={8} justify={'center'} ref={ref}>
      {showProgress && (
        <div className={styles.process}>
          <Progress percent={progress} size="small" type="circle" />
        </div>
      )}
      {showImage ? (
        <ImagePreview />
      ) : inLobeChat ? null : (
        <Center height={'100%'} width={'100%'}>
          <Guide />
        </Center>
      )}
    </Center>
  );
});

export default Preview;
