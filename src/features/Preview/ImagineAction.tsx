import { Icon } from '@lobehub/ui';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import { LucideScaling, LucideWand, RefreshCwIcon } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, cx }) => {
  const buttonCtn = css`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;

    transition: opacity 0.3s;
  `;

  return {
    buttonCtn,
    item: css`
      position: relative;

      &:hover {
        .${cx(buttonCtn)} {
          opacity: 1;
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
          height={'100%'}
          horizontal
          onClick={() => {
            setMask(true);
          }}
          style={{ cursor: 'pointer', flexWrap: 'wrap' }}
        >
          {array.map((index) => (
            <Flexbox className={styles.item} height={'50%'} key={index} width={'50%'}>
              <Flexbox className={styles.buttonCtn} gap={16} horizontal>
                <Button
                  icon={<Icon icon={LucideScaling} />}
                  onClick={(e) => {
                    e.stopPropagation();

                    if (!id) return;
                    createSimpleChangeTask({ action: 'UPSCALE', index, taskId: id });
                  }}
                  shape={'round'}
                  type={'primary'}
                >
                  高清化
                </Button>
                <Button
                  icon={<Icon icon={LucideWand} />}
                  onClick={(e) => {
                    e.stopPropagation();

                    if (!id) return;
                    createSimpleChangeTask({ action: 'VARIATION', index, taskId: id });
                  }}
                  shape={'round'}
                >
                  风格化
                </Button>
              </Flexbox>
            </Flexbox>
          ))}
        </Flexbox>
        <div className={cx('action-reroll', styles.reroll)}>
          <Button
            icon={<Icon icon={RefreshCwIcon} />}
            onClick={(e) => {
              e.stopPropagation();

              if (!id) return;
              createSimpleChangeTask({ action: 'REROLL', taskId: id });
            }}
            shape={'round'}
          >
            重新生成
          </Button>
        </div>
      </>
    )
  );
});

export default ImageAction;
