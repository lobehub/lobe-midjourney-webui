import { Alert, Icon, Input } from '@lobehub/ui';
import { Button, Drawer, FloatButton, Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { LucideSettings } from 'lucide-react';
import Link from 'next/link';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useMidjourneyStore } from '@/store/midjourney';

const getErrorContent = (errorType: string | { type: string }) => {
  if (typeof errorType === 'string') return errorType;

  switch (errorType.type) {
    case 'NO_BASE_URL': {
      return 'MIDJOURNEY API 代理地址为空，请填写后重试';
    }
  }

  return '网络请求错误';
};
const Settings = memo(() => {
  const [isSettingsModalOpen, MIDJOURNEY_API_URL, updateSettings] = useMidjourneyStore((s) => [
    s.isSettingsModalOpen,
    s.settings.MIDJOURNEY_PROXY_URL,
    s.updateSettings,
  ]);
  const requestError = useMidjourneyStore((s) => s.requestError, isEqual);

  const [url, setUrl] = useState(MIDJOURNEY_API_URL);
  return (
    <>
      <Drawer
        onClose={() => {
          useMidjourneyStore.setState({ isSettingsModalOpen: false });
        }}
        open={isSettingsModalOpen}
        title={'设置'}
      >
        <Flexbox gap={24}>
          {requestError && (
            <Alert
              closable
              description={getErrorContent(requestError.body)}
              message={`请求失败，错误码 ${requestError.status}`}
              type={'error'}
            />
          )}
          <Flexbox gap={12}>
            <div>Midjourney API 代理地址</div>
            <Input
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder={'http://localhost:8080/'}
              value={url}
            />
            <Typography.Text type={'secondary'}>
              请参考{' '}
              <Link href={'https://github.com/novicezk/midjourney-proxy'}>midjourney-proxy</Link>{' '}
              部署好服务端后使用
            </Typography.Text>
          </Flexbox>
          <Button
            onClick={() => {
              updateSettings({ MIDJOURNEY_PROXY_URL: url });
              useMidjourneyStore.setState({ isSettingsModalOpen: false });
            }}
            type={'primary'}
          >
            保存
          </Button>
        </Flexbox>
      </Drawer>
      <FloatButton
        icon={<Icon icon={LucideSettings} />}
        onClick={() => {
          useMidjourneyStore.setState({ isSettingsModalOpen: true });
        }}
      />
    </>
  );
});
export default Settings;
