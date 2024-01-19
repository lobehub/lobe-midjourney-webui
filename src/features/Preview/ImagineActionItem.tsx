import { ActionIcon } from '@lobehub/ui';
import { ButtonProps } from 'antd';
import { createStyles } from 'antd-style';
import { Brush, Expand } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useMinimode } from '@/hooks/useMinimode';

const useStyles = createStyles(({ css, cx }) => {
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
      background: rgba(0, 0, 0, 50%);
    `,
    buttonCtn,
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
  };
});

interface ImageActionItemProps {
  onUpscale: ButtonProps['onClick'];
  onVary: ButtonProps['onClick'];
}

const ImagineActionItem = memo<ImageActionItemProps>(({ onUpscale, onVary }) => {
  const { styles } = useStyles();

  const { isMini, isMobile } = useMinimode();

  return (
    <Flexbox className={styles.item} height={'50%'} width={'50%'}>
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
          onClick={onUpscale}
          size={isMini ? 'small' : 'normal'}
        >
          {isMini ? 'U' : 'Upscale'}
        </ActionIcon>
        <ActionIcon
          active
          className={styles.button}
          gap={4}
          glass
          horizontal
          icon={Brush}
          onClick={onVary}
          size={isMini ? 'small' : 'normal'}
        >
          {isMini ? 'V' : 'Vary'}
        </ActionIcon>
      </Flexbox>
    </Flexbox>
  );
});

export default ImagineActionItem;
