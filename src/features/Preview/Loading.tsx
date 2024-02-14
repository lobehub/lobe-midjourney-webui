import { Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, cx, stylish }) => ({
  waiting: cx(
    stylish.blur,
    css`
      position: absolute;
      z-index: 10;

      padding: 8px;

      background: ${token.colorFillTertiary};
      border-radius: ${token.borderRadiusLG}px;
    `,
  ),
}));

const Loading = memo(() => {
  const { t } = useTranslation('common');
  const { styles } = useStyles();

  return (
    <Flexbox align={'center'} className={styles.waiting} gap={8} horizontal>
      <Icon icon={Loader2} spin />
      <div>{t('appIniting')}</div>
    </Flexbox>
  );
});

export default Loading;
