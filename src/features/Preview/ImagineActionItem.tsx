import { Icon } from '@lobehub/ui';
import { Button, ButtonProps, Space } from 'antd';
import { createStyles } from 'antd-style';
import { Brush, Expand } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useMinimode } from '@/hooks/useMinimode';

const useStyles = createStyles(({ css, cx, responsive }) => {
  const buttonCtn = css`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;

    transition: opacity 0.3s ease-in-out;

    ${responsive.mobile} {
      opacity: 1;
    }
  `;

  return {
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

  const { isMini } = useMinimode();

  return (
    <Flexbox className={styles.item} height={'50%'} width={'50%'}>
      <Space.Compact className={styles.buttonCtn}>
        <Button
          icon={<Icon icon={Expand} />}
          onClick={onUpscale}
          size={isMini ? 'small' : 'middle'}
        >
          {isMini ? '' : 'Upscale'}
        </Button>
        <Button icon={<Icon icon={Brush} />} onClick={onVary} size={isMini ? 'small' : 'middle'}>
          {isMini ? '' : 'Vary'}
        </Button>
      </Space.Compact>
    </Flexbox>
  );
});

export default ImagineActionItem;
