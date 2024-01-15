import { Alert, Icon, Input } from '@lobehub/ui';
import { Drawer, FloatButton, Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { LucideSettings } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStore } from '@/store';

const getErrorContent = (errorType: string) => {
  switch (errorType) {
    case 'NO_BASE_URL': {
      return 'MIDJOURNEY API 代理地址为空，请填写后重试';
    }
  }

  return '网络请求错误';
};
const Settings = memo(() => {
  const [isSettingsModalOpen, MIDJOURNEY_API_URL, updateSettings] = useStore((s) => [
    s.isSettingsModalOpen,
    s.settings.MIDJOURNEY_API_URL,
    s.updateSettings,
  ]);
  const requestError = useStore((s) => s.requestError, isEqual);

  return (
    <>
      <Drawer
        onClose={() => {
          useStore.setState({ isSettingsModalOpen: false });
        }}
        open={isSettingsModalOpen}
        title={'设置'}
      >
        <Flexbox gap={24}>
          {requestError && (
            <Alert closable message={getErrorContent(requestError.type)} type={'error'} />
          )}
          <Flexbox gap={12}>
            <div>MIDJOURNEY API 代理地址</div>
            <Input
              onChange={(e) => {
                updateSettings({ MIDJOURNEY_API_URL: e.target.value });
              }}
              placeholder={'http://localhost:8080/'}
              value={MIDJOURNEY_API_URL}
            />
            <Typography.Text type={'secondary'}>
              请参考{' '}
              <Link href={'https://github.com/novicezk/midjourney-proxy'}>midjourney-proxy</Link>{' '}
              部署好服务端后使用
            </Typography.Text>
          </Flexbox>
        </Flexbox>
      </Drawer>
      <FloatButton
        icon={<Icon icon={LucideSettings} />}
        onClick={() => {
          useStore.setState({ isSettingsModalOpen: true });
        }}
      />
    </>
  );
});
export default Settings;
