import { Image } from '@lobehub/ui';
import { useSize } from 'ahooks';
import { Skeleton } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useEffect, useRef, useState } from 'react';
import { Dimensions, getImageSize } from 'react-image-size';
import { Center } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

import Actions from './Actions';

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

  const maxWidth = container.width;
  const maxHeight = container.height;
  let maxValue: number = 0;

  if (content?.height >= content?.width && content?.height >= maxHeight) {
    maxValue = maxHeight;
    height = maxHeight + 'px';
    width = 'auto';
  } else if (content?.width >= content?.height && content?.width >= maxWidth) {
    height = 'auto';
    width = maxWidth + 'px';
    maxValue = maxWidth;
  } else {
    width = width + 'px';
    height = height + 'px';
  }
  maxValue = maxValue - 16;

  return { height, maxValue, width };
};

const useStyles = createStyles(({ css, prefixCls }, inLobeChat: boolean) => {
  return {
    image: css`
      border-radius: ${inLobeChat ? 8 : 24}px;
    `,
    imageWrapper: css`
      margin-block: 0;
      border-radius: ${inLobeChat ? 8 : 24}px;
    `,
    imagine: css`
      .${prefixCls}-image-mask:hover {
        opacity: 0;
      }
    `,
  };
});

const ImagePreview = memo(() => {
  const inLobeChat = useStore((s) => s.inLobeChat);

  const { styles, cx, theme } = useStyles(inLobeChat);

  const [modal, setMask] = useState<boolean>(false);
  const [dim, setDims] = useState<Size>();
  const containerRef = useRef(null);
  const size = useSize(containerRef);

  const imageContainerSize = getContainerSize(dim, size);

  const currentTask = useStore(midjourneySelectors.currentActiveTask);

  useEffect(() => {
    const url = currentTask?.imageUrl;
    if (!url) return;

    fetchImageSize(url).then((size) => {
      if (!size) return;
      setDims(size);
    });
  }, [currentTask?.imageUrl]);

  return (
    <Center flex={1} height={'100%'} ref={containerRef} width={'100%'}>
      {currentTask?.imageUrl ? (
        <div style={{ position: 'relative' }}>
          <Image
            className={styles.image}
            preview={{ onVisibleChange: setMask, visible: modal }}
            src={currentTask.imageUrl}
            wrapperClassName={cx(
              styles.imageWrapper,
              currentTask.action === 'IMAGINE' && styles.imagine,
            )}
            {...imageContainerSize}
          />
          <Actions setMask={setMask} />
        </div>
      ) : (
        <Skeleton.Node
          active
          style={{
            borderRadius: inLobeChat ? 8 : 24,
            color: theme.colorTextTertiary,

            height: imageContainerSize.maxValue || inLobeChat ? 400 : 600,
            width: imageContainerSize.maxValue || inLobeChat ? 400 : 600,
          }}
        >
          Task is waiting to start...
        </Skeleton.Node>
      )}
    </Center>
  );
});

export default ImagePreview;
