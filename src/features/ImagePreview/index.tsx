import { Image } from '@lobehub/ui';
import { useSize } from 'ahooks';
import { Progress, Skeleton } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useEffect, useRef, useState } from 'react';
import { Dimensions, getImageSize } from 'react-image-size';
import { Center, Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

interface Size extends Dimensions {
  aspectRadio: number;
}
const fetchImageSize = async (url: string): Promise<Size | undefined> => {
  try {
    const dim = await getImageSize(url);
    return { ...dim, aspectRadio: dim.width / dim.height };
  } catch (error) {
    console.log(error);
    return;
  }
};

const getContainerSize = (content?: Dimensions, container?: Dimensions) => {
  if (!content || !container) return {};
  let width = String(content?.width);
  let height = String(content?.height);

  const spacing = 24;
  const maxWidth = container.width - spacing;
  const maxHeight = container.height - spacing;

  if (content?.height >= content?.width && content?.height >= maxHeight) {
    height = maxHeight + 'px';
    width = 'auto';
  } else if (content?.width >= content?.height && content?.width >= maxWidth) {
    height = 'auto';
    width = maxWidth + 'px';
  } else {
    width = width + 'px';
    height = height + 'px';
  }

  return { height, width };
};
const useStyles = createStyles(({ css, token, prefixCls }) => ({
  container: css`
    overflow: hidden;
    background: ${token.colorFillTertiary};
    border-radius: 24px;
  `,
  image: css`
    border-radius: 24px;
  `,
  imageWrapper: css`
    width: fit-content;
    height: fit-content;
    margin-block: 0;
    border-radius: 24px;
  `,
  imagine: css`
    .${prefixCls}-image-mask:hover {
      opacity: 0;
    }
  `,
}));

const ImagePreview = memo(() => {
  const [dim, setDims] = useState<Size>();
  const containerRef = useRef(null);
  const size = useSize(containerRef);

  const [progress, taskLoading] = useStore((s) => [
    midjourneySelectors.currentTaskProgress(s),
    midjourneySelectors.isCurrentTaskRunning(s),
  ]);

  const { styles, cx, theme } = useStyles();
  const currentTask = useStore(midjourneySelectors.currentActiveTask);

  useEffect(() => {
    const url = currentTask?.imageUrl;
    if (!url) return;

    fetchImageSize(url).then((size) => {
      if (!size) return;
      setDims(size);
    });
  }, [currentTask?.imageUrl]);

  const imageContainerSize = getContainerSize(dim, size);

  return (
    (taskLoading || currentTask?.imageUrl) && (
      <Flexbox
        className={styles.container}
        flex={1}
        gap={8}
        height={'calc(100vh - 80px - 64px - 8*2px - 2*16px )'}
        padding={16}
      >
        {currentTask?.imageUrl ? (
          <Center flex={1} height={'100%'} ref={containerRef} width={'100%'}>
            <Image
              className={styles.image}
              src={currentTask.imageUrl}
              {...imageContainerSize}
              wrapperClassName={cx(
                styles.imageWrapper,
                currentTask.action === 'IMAGINE' && styles.imagine,
              )}
            />
          </Center>
        ) : (
          <Center flex={1} height={'100%'} width={'100%'}>
            <Skeleton.Node
              active
              style={{
                borderRadius: 24,
                color: theme.colorTextTertiary,
                height: 600,
                width: 600,
              }}
            >
              Task is waiting to start...
            </Skeleton.Node>
          </Center>
        )}
        {progress !== 100 && <Progress percent={progress} />}
      </Flexbox>
    )
  );
});

export default ImagePreview;
