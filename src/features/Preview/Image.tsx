import { Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';
import { Center } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import Actions from './Actions';

const useStyles = createStyles(({ css, prefixCls, token }) => {
  return {
    empty: css`
      width: var(--max);
      height: var(--max);
      background: ${token.colorTextTertiary};
      border-radius: ${token.borderRadiusLG}px;
    `,
    image: css`
      border-radius: ${token.borderRadiusLG}px;
    `,
    imageWrapper: css`
      margin-block: 0;
      border-radius: ${token.borderRadiusLG}px;

      img {
        width: var(--max);
        height: var(--max);
      }
    `,
    imagine: css`
      .${prefixCls}-image-mask:hover {
        opacity: 0;
      }
    `,
  };
});

const ImagePreview = memo(() => {
  const { styles, cx } = useStyles();

  const [modal, setMask] = useState<boolean>(false);

  const currentTask = useMidjourneyStore(midjourneySelectors.currentActiveTask);

  return (
    <Center flex={1} height={`var(--max)`} width={`var(--max)`}>
      {currentTask?.imageUrl ? (
        <div style={{ height: `var(--max)`, maxWidth: `var(--max)`, position: 'relative' }}>
          <Image
            className={styles.image}
            preview={{ onVisibleChange: setMask, visible: modal }}
            src={currentTask.imageUrl}
            wrapperClassName={cx(
              styles.imageWrapper,
              currentTask.action === 'IMAGINE' && styles.imagine,
            )}
          />
          {currentTask.action !== 'UPSCALE' && <Actions setMask={setMask} />}
        </div>
      ) : (
        <div className={styles.empty} />
      )}
    </Center>
  );
});

export default ImagePreview;
