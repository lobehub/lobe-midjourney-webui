import { Button } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const ImageAction = memo(() => {
  return (
    <Flexbox gap={8} horizontal>
      <Button type={'primary'}>高清化</Button>
      <Button>风格化</Button>
    </Flexbox>
  );
});

export default ImageAction;
