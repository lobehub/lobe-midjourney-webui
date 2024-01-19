import { Icon } from '@lobehub/ui';
import { Button, ButtonProps, Space } from 'antd';
import { createStyles } from 'antd-style';
import { Brush, Expand } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, cx }) => {
  const buttonCtn = css`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;

    transition: opacity 0.3s ease-in-out;
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

  return (
    <Flexbox className={styles.item} height={'50%'} width={'50%'}>
      <Space.Compact className={styles.buttonCtn}>
        <Button icon={<Icon icon={Expand} />} onClick={onUpscale}>
          Upscale
        </Button>
        <Button icon={<Icon icon={Brush} />} onClick={onVary}>
          Vary
        </Button>
      </Space.Compact>
    </Flexbox>
  );
});

export default ImagineActionItem;
