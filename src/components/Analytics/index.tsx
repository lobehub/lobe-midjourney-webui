import dynamic from 'next/dynamic';

import { getClientConfig } from '@/config/client';

const Vercel = dynamic(() => import('./Vercel'), { ssr: false });
const Plausible = dynamic(() => import('./Plausible'), { ssr: false });

const { enableVercelAnalytics, enablePlausibleAnalytics } = getClientConfig();

const Analytics = () => {
  return (
    <>
      {enableVercelAnalytics && <Vercel />}
      {enablePlausibleAnalytics && <Plausible />}
    </>
  );
};

export default Analytics;
