import { createStyles } from 'antd-style';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import ImagineAction from './ImagineAction';

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  `,
}));

const Actions = memo<{ setMask: (mask: boolean) => void }>(({ setMask }) => {
  const currentTask = useMidjourneyStore(midjourneySelectors.currentActiveTask);
  const { styles } = useStyles();
  const content = useMemo(() => {
    switch (currentTask?.action) {
      case 'VARIATION':
      case 'REROLL':
      case 'IMAGINE': {
        return <ImagineAction id={currentTask.id || ''} setMask={setMask} />;
      }
      case 'UPSCALE': {
        break;
      }

      case 'DESCRIBE': {
        break;
      }
      case 'BLEND': {
        break;
      }
    }

    return null;
  }, [currentTask?.action]);

  return <Flexbox className={styles.container}>{content}</Flexbox>;
});

export default Actions;
