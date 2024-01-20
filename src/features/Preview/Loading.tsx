import { Typography } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    --mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;

    aspect-ratio: 1;
    width: 50px;
    padding: 8px;

    background: ${token.colorPrimaryHover};
    border-radius: 50%;
    mask: var(--mask);

    animation: rotate 1s infinite linear;

    mask-composite: source-out;
    mask-composite: subtract;

    @keyframes rotate {
      to {
        transform: rotate(1turn);
      }
    }
  `,
}));

const Loading = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} gap={16}>
      <div className={styles.container} />
      <Typography.Text type={'secondary'}>{t('appIniting')}</Typography.Text>
    </Flexbox>
  );
});

export default Loading;
