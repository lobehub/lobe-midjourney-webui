import { Icon } from '@lobehub/ui';
import { useSize } from 'ahooks';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import Guide from './Guide';
import ImagePreview from './ImagePreview';
import Loading from './Loading';

const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => ({
  container: css`
    position: relative;
    overflow: hidden;
  `,
  process: cx(
    stylish.blur,
    css`
      position: absolute;
      z-index: 100;

      padding: 8px;

      background: ${token.colorFillTertiary};
      border-radius: 50%;

      .${prefixCls}-progress-text {
        font-family: ${token.fontFamilyCode};
        font-size: 12px;
        color: ${token.colorTextLightSolid} !important;
      }
    `,
  ),
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

const Preview = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('common');
  const [loaded, setLoaded] = useState(false);

  const [isAppInited, inLobeChat, showImage, showProgress, progress] = useMidjourneyStore((s) => [
    midjourneySelectors.isAppInited(s),
    midjourneySelectors.isInLobeChat(s),
    midjourneySelectors.showImage(s),
    midjourneySelectors.showProgress(s),
    midjourneySelectors.currentTaskProgress(s),
  ]);

  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);

  useEffect(() => {
    if (!size) return;

    const maxSize = size.width > size.height ? size.height : size.width;
    document.documentElement.style.setProperty('--max', `${maxSize}px`);
  }, [size]);

  return (
    <Center className={styles.container} flex={1} gap={8} justify={'center'} ref={ref}>
      {isAppInited ? (
        <>
          {(!loaded || showProgress) &&
            (progress === 0 ? (
              <Flexbox className={styles.waiting} gap={6} horizontal>
                <Icon icon={Loader2} spin />
                <div>{t('task.starting')}</div>
              </Flexbox>
            ) : (
              <div className={styles.process}>
                <Progress percent={progress} size="small" type="circle" />
              </div>
            ))}
          {showImage ? (
            <ImagePreview setLoaded={setLoaded} />
          ) : inLobeChat ? null : (
            <Center height={'100%'} width={'100%'}>
              <Guide />
            </Center>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Center>
  );
});

export default Preview;
