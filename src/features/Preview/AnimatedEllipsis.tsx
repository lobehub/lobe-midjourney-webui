import { createStyles } from 'antd-style';
import React, { memo } from 'react';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    aspect-ratio: 4;
    width: 24px;

    background: radial-gradient(circle closest-side, ${token.colorText} 40%, #0000) 0 /
      calc(100% / 3) 80% space;
    clip-path: inset(0 100% 0 0);

    animation: step 0.7s steps(4) infinite;

    @keyframes step {
      to {
        clip-path: inset(0 -34% 0 0);
      }
    }
  `,
}));

const ReactAnimatedEllipsis = memo(() => {
  const { styles } = useStyles();

  return <div className={styles.container} />;
});

export default ReactAnimatedEllipsis;
