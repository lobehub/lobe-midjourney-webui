import { useResponsive } from 'antd-style';
import { useEffect, useMemo, useState } from 'react';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

export const useMinimode = () => {
  const inLobeChat = useMidjourneyStore(midjourneySelectors.isInLobeChat);
  const [isMobile, setIsMobile] = useState(false);
  const { mobile } = useResponsive();

  useEffect(() => {
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    setIsMobile(mobileRegex.test(navigator.userAgent));
  }, []);

  return useMemo(
    () => ({
      inLobeChat,
      isMini: inLobeChat || mobile,
      isMobile,
    }),
    [inLobeChat, mobile, isMobile],
  );
};
