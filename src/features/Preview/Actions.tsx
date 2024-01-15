import { createStyles } from 'antd-style';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useStore } from '@/store';

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

const Actions = memo(() => {
  const currentTask = useStore(midjourneySelectors.currentActiveTask);
  const { styles } = useStyles();
  const content = useMemo(() => {
    switch (currentTask?.action) {
      case 'IMAGINE': {
        return <ImagineAction />;
      }
      case 'UPSCALE': {
        break;
      }
      case 'VARIATION': {
        break;
      }
      case 'REROLL': {
        break;
      }
      case 'DESCRIBE': {
        break;
      }
      case 'BLEND': {
        break;
      }
    }
  }, [currentTask?.action]);

  return <Flexbox className={styles.container}>{content}</Flexbox>;
});

export default Actions;
