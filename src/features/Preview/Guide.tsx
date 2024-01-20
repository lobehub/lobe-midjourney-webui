import { Steps } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles(({ css }) => ({
  step: css`
    .ant-steps-item-content {
      padding-bottom: 24px;
    }
  `,
}));

const Guide = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('common');

  return (
    <Steps
      className={styles.step}
      current={-1}
      direction="vertical"
      items={[
        {
          description: t('guide.step1.description'),
          title: t('guide.step1.title'),
        },
        {
          description: t('guide.step2.description'),
          title: t('guide.step2.title'),
        },
      ]}
      style={{ gap: 24, width: 'fit-content' }}
    />
  );
});

export default Guide;
