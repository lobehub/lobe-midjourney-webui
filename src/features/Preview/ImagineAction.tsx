import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { RefreshCwIcon } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import ImagineActionItem from './ImagineActionItem';

const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      border-radius: ${token.borderRadiusLG}px;

      &:hover {
        .image-item {
          background: rgba(0, 0, 0, 50%);
        }
      }
    `,
    reroll: css`
      position: absolute;
      top: 16px;
      right: 16px;

      opacity: 0;

      transition: opacity 0.3s;
    `,
    rerollInLobeChat: css`
      position: absolute;
      bottom: -44px;
      left: 50%;
      transform: translateX(-50%);

      opacity: 0;

      transition: opacity 0.3s;
    `,
  };
});

const array = [1, 2, 3, 4];

interface ImageActionProps {
  id: string;
  setMask: (mask: boolean) => void;
}
const ImageAction = memo<ImageActionProps>(({ setMask, id }) => {
  const { styles, cx } = useStyles();

  const [createSimpleChangeTask, isSuccess] = useMidjourneyStore((s) => [
    s.createChangeTask,
    midjourneySelectors.getTaskById(id)(s)?.status === 'SUCCESS',
  ]);

  return (
    isSuccess && (
      <>
        <Flexbox
          className={styles.container}
          height={'100%'}
          horizontal
          onClick={() => {
            setMask(true);
          }}
          style={{ cursor: 'pointer', flexWrap: 'wrap' }}
        >
          {array.map((index) => (
            <ImagineActionItem
              key={index}
              onUpscale={(e) => {
                e.stopPropagation();

                if (!id) return;
                createSimpleChangeTask({ action: 'UPSCALE', index, taskId: id });
              }}
              onVary={(e) => {
                e.stopPropagation();

                if (!id) return;
                createSimpleChangeTask({ action: 'VARIATION', index, taskId: id });
              }}
            />
          ))}
        </Flexbox>
        <ActionIcon
          active
          className={cx('action-reroll', styles.reroll)}
          glass
          icon={RefreshCwIcon}
          onClick={(e) => {
            e.stopPropagation();

            if (!id) return;
            createSimpleChangeTask({ action: 'REROLL', taskId: id });
          }}
        />
      </>
    )
  );
});

export default ImageAction;
