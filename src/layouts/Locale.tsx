import { ConfigProvider } from 'antd';
import { PropsWithChildren, memo, useEffect, useState } from 'react';
import useSWR from 'swr';

import { createI18nNext } from '@/locales/create';
import { normalizeLocale } from '@/locales/resources';
import { useGlobalStore } from '@/store/global';
import { isOnServerSide } from '@/utils/env';
import { switchLang } from '@/utils/locale';

const getAntdLocale = async (lang?: string) => {
  let normalLang = normalizeLocale(lang);

  // due to antd only have ar-EG locale, we need to convert ar to ar-EG
  // refs: https://ant.design/docs/react/i18n

  // And we don't want to handle it in `normalizeLocale` function
  // because of other locale files are all `ar` not `ar-EG`
  if (normalLang === 'ar') normalLang = 'ar-EG';

  const { default: locale } = await import(`antd/locale/${normalLang.replace('-', '_')}.js`);

  return locale;
};

interface LocaleLayoutProps extends PropsWithChildren {
  defaultLang?: string;
}

const Locale = memo<LocaleLayoutProps>(({ children, defaultLang }) => {
  const [i18n] = useState(createI18nNext(defaultLang));
  const [lang, setLang] = useState(defaultLang);

  const language = useGlobalStore((s) => s.language);

  const { data: locale } = useSWR(['antd-locale', lang], ([, key]) => getAntdLocale(key), {
    revalidateOnFocus: false,
  });

  // if run on server side, init i18n instance everytime
  if (isOnServerSide) {
    i18n.init();
  } else {
    // if on browser side, init i18n instance only once
    if (!i18n.instance.isInitialized)
      // console.debug('locale', lang);
      i18n.init().then(() => {
        // console.debug('inited.');
      });
  }

  useEffect(() => {
    if (language === 'auto') {
      switchLang('auto');
    }
  }, [language]);

  // handle i18n instance language change
  useEffect(() => {
    const handleLang = (e: string) => {
      setLang(e);
    };

    i18n.instance.on('languageChanged', handleLang);
    return () => {
      i18n.instance.off('languageChanged', handleLang);
    };
  }, [i18n]);

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
});

export default Locale;
