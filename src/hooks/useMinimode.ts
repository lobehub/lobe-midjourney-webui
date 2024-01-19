import { useResponsive } from 'antd-style';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

export const useMinimode = () => {
  const inLobeChat = useMidjourneyStore(midjourneySelectors.isInLobeChat);
  const { mobile } = useResponsive();
  return {
    inLobeChat,
    isMini: inLobeChat || mobile,
    isMobile: mobile,
  };
};
