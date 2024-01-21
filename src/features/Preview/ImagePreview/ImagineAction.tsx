import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Expand, SwatchBook } from 'lucide-react';
import { rgba } from 'polished';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useMinimode } from '@/hooks/useMinimode';
import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ cx, css, token }) => {
  const buttonCtn = css`
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;

    transition: opacity 0.3s ease-in-out;
  `;
  return {
    button: css`
      width: unset !important;
      padding-inline: 1em;
      background: ${rgba(token.colorBgLayout, 0.5)};
      border: 1px solid ${rgba(token.colorText, 0.2)};
    `,
    buttonCtn,
    container: css`
      border-radius: ${token.borderRadiusLG}px;

      &:hover {
        .image-item {
          background: rgba(0, 0, 0, 50%);
        }
      }
    `,
    item: cx(
      'image-item',
      css`
        position: relative;
        transition: background 0.3s ease-in-out;

        &:hover {
          background: transparent !important;
          .${cx(buttonCtn)} {
            opacity: 1;
          }
        }
      `,
    ),
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
  const { styles } = useStyles();
  const { isMobile, isMini } = useMinimode();
  const [createSimpleChangeTask, isSuccess] = useMidjourneyStore((s) => [
    s.createChangeTask,
    midjourneySelectors.getTaskById(id)(s)?.status === 'SUCCESS',
  ]);
  const { t } = useTranslation('common');

  return (
    isSuccess && (
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
          <Flexbox className={styles.item} height={'50%'} key={index} width={'50%'}>
            <Flexbox
              className={styles.buttonCtn}
              gap={4}
              horizontal
              style={isMobile ? { opacity: 1 } : {}}
            >
              <ActionIcon
                active
                className={styles.button}
                gap={4}
                glass
                horizontal
                icon={Expand}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!id) return;

                  createSimpleChangeTask({ action: 'UPSCALE', index, taskId: id });
                }}
                size={isMini ? 'small' : 'normal'}
              >
                {isMini ? 'U' : t('task.actions.upscale')}
              </ActionIcon>
              <ActionIcon
                active
                className={styles.button}
                gap={4}
                glass
                horizontal
                icon={SwatchBook}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!id) return;
                  createSimpleChangeTask({ action: 'VARIATION', index, taskId: id });
                }}
                size={isMini ? 'small' : 'normal'}
              >
                {isMini ? 'V' : t('task.actions.variant')}
              </ActionIcon>
            </Flexbox>
          </Flexbox>
        ))}
      </Flexbox>
    )
  );
});

export default ImageAction;
