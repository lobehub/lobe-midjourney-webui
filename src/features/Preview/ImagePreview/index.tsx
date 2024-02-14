import { Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo, useEffect, useState } from 'react';
import { Center } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import Actions from './Actions';
import MoreActions from './MoreActions';

const useStyles = createStyles(({ css, prefixCls, token }) => {
  return {
    container: css`
      &:hover {
        .actions {
          opacity: 1;
        }
      }
    `,
    empty: css`
      width: var(--max);
      height: var(--max);
      background: ${token.colorFillSecondary};
      border-radius: ${token.borderRadiusLG}px;
    `,
    image: css`
      border-radius: ${token.borderRadiusLG}px;
    `,
    imageWrapper: css`
      margin-block: 0;
      border-radius: ${token.borderRadiusLG}px;

      img {
        min-width: var(--max) !important;
        min-height: var(--max) !important;
      }
    `,
    imagine: css`
      .${prefixCls}-image-mask:hover {
        opacity: 0;
      }
    `,
  };
});

const ImagePreview = memo<{ setLoaded: (loaded: boolean) => void }>(({ setLoaded }) => {
  const { styles, cx } = useStyles();

  const [modal, setMask] = useState<boolean>(false);

  const currentTask = useMidjourneyStore(midjourneySelectors.currentActiveTask);

  useEffect(() => {
    setLoaded(false);
  }, [currentTask?.imageUrl]);

  return (
    <Center className={styles.container} flex={1} height={`var(--max)`} width={`var(--max)`}>
      {currentTask?.imageUrl ? (
        <div style={{ height: `var(--max)`, maxWidth: `var(--max)`, position: 'relative' }}>
          <Image
            className={styles.image}
            onLoad={() => setLoaded(true)}
            preview={{ onVisibleChange: setMask, visible: modal }}
            src={currentTask.imageUrl}
            wrapperClassName={cx(
              styles.imageWrapper,
              currentTask.action === 'IMAGINE' && styles.imagine,
            )}
          />
          {currentTask.action !== 'UPSCALE' && <Actions setMask={setMask} />}
          <MoreActions hideReroll={currentTask.action === 'UPSCALE'} taskId={currentTask?.id} />
        </div>
      ) : (
        <div className={styles.empty} />
      )}
    </Center>
  );
});

export default ImagePreview;
