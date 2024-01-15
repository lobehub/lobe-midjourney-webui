import { Image } from '@lobehub/ui';
import { Progress, Skeleton } from 'antd';
import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

const ImagePreview = memo(() => {
  const [progress, taskLoading] = useStore((s) => [
    midjourneySelectors.currentTaskProgress(s),
    midjourneySelectors.isCurrentTaskRunning(s),
  ]);

  const currentTask = useStore(midjourneySelectors.currentActiveTask);

  const theme = useTheme();
  return (
    (taskLoading || currentTask?.imageUrl) && (
      <Flexbox flex={1} gap={8}>
        <Center flex={1} style={{ borderRadius: 8, overflow: 'hidden' }} width={'100%'}>
          {currentTask?.imageUrl ? (
            <Image src={currentTask.imageUrl} style={{ borderRadius: 24, maxWidth: 600 }} />
          ) : (
            <Skeleton.Node
              active
              style={{ borderRadius: 24, color: theme.colorTextTertiary, height: 600, width: 600 }}
            >
              Imagine is waiting to start...
            </Skeleton.Node>
          )}
        </Center>
        {progress !== 100 && <Progress percent={progress} />}
      </Flexbox>
    )
  );
});

export default ImagePreview;
