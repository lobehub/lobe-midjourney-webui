import { Image } from '@lobehub/ui';
import { Progress, Skeleton } from 'antd';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { useStore } from '../store';

const ImagePreview = memo(() => {
  const [imageUrl, progress, taskLoading] = useStore((s) => [
    s.task?.imageUrl,
    Number.parseInt(s.task?.progress || '0'),
    s.taskLoading,
  ]);

  return (
    (taskLoading || imageUrl) && (
      <Center gap={8}>
        {progress !== 100 && <Progress percent={progress} />}
        <Flexbox style={{ borderRadius: 8, overflow: 'hidden' }} width={'100%'}>
          {imageUrl ? <Image src={imageUrl} /> : <Skeleton.Node active> </Skeleton.Node>}
        </Flexbox>
      </Center>
    )
  );
});

export default ImagePreview;
