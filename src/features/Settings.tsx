import { ActionIcon, Alert, Icon, Input, Modal } from '@lobehub/ui';
import { Button, Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { LucideSettings, Save } from 'lucide-react';
import Link from 'next/link';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useGlobalStore } from 'src/store/global';

import { settingsSelectors } from '@/store/global/selectors';

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
  const [isSettingsModalOpen, MIDJOURNEY_API_URL, updateSettings] = useGlobalStore((s) => [
    s.isSettingsModalOpen,
    settingsSelectors.proxyURL(s),
    s.updateSettings,
  ]);

  const requestError = useGlobalStore((s) => s.requestError, isEqual);

  const [url, setUrl] = useState(MIDJOURNEY_API_URL);

  return (
    <>
      <Modal
        centered
        footer={
          <Button
            block
            icon={<Icon icon={Save} />}
            onClick={() => {
              updateSettings({ MIDJOURNEY_PROXY_URL: url });
              useGlobalStore.setState({ isSettingsModalOpen: false });
            }}
            type={'primary'}
          />
        }
        onCancel={() => {
          useGlobalStore.setState({ isSettingsModalOpen: false });
        }}
        open={isSettingsModalOpen}
        title={'Setting'}
        width={375}
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
            <div>Midjourney API Proxy</div>
            <Input
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder={'https://your-midjourney-proxy'}
              value={url}
            />
            <Typography.Text type={'secondary'}>
              请参考{' '}
              <Link href={'https://github.com/novicezk/midjourney-proxy'}>midjourney-proxy</Link>{' '}
              部署好服务端后使用
            </Typography.Text>
          </Flexbox>
        </Flexbox>
      </Modal>
      <ActionIcon
        icon={LucideSettings}
        onClick={() => {
          useGlobalStore.setState({ isSettingsModalOpen: true });
        }}
        size={'site'}
      />
    </>
  );
});
export default Settings;
