import { ActionIcon, Alert, Icon, Input, Modal } from '@lobehub/ui';
import { Button, Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { LucideSettings, Save } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import { useGlobalStore } from 'src/store/global';

import { settingsSelectors } from '@/store/global/selectors';

const Settings = memo(() => {
  const { t } = useTranslation('common');
  const [isSettingsModalOpen, proxyURL, updateSettings] = useGlobalStore((s) => [
    s.isSettingsModalOpen,
    settingsSelectors.proxyURL(s),
    s.updateSettings,
  ]);

  const requestError = useGlobalStore((s) => s.requestError, isEqual);

  const getErrorContent = (errorType: string | { type: string }) => {
    if (typeof errorType === 'string') return errorType;

    switch (errorType.type) {
      case 'NO_BASE_URL': {
        return t('response.NO_BASE_URL');
      }
    }

    return t('response.fallback');
  };

  return (
    <>
      <ActionIcon
        icon={LucideSettings}
        onClick={() => {
          useGlobalStore.setState({ isSettingsModalOpen: true });
        }}
        size={'site'}
        title={t('settings.modalTitle')}
      />
      <Modal
        footer={
          <Button
            block
            icon={<Icon icon={Save} />}
            onClick={() => {
              useGlobalStore.setState({ isSettingsModalOpen: false });
            }}
            type={'primary'}
          >
            {t('settings.save')}
          </Button>
        }
        onCancel={() => {
          useGlobalStore.setState({ isSettingsModalOpen: false });
        }}
        open={isSettingsModalOpen}
        title={t('settings.modalTitle')}
        width={375}
      >
        <Flexbox gap={24}>
          {requestError && (
            <Alert
              closable
              description={getErrorContent(requestError.body)}
              message={t('requestError', { errorCode: requestError.status })}
              type={'error'}
            />
          )}
          <Flexbox gap={12}>
            <div>{t('settings.MidjourneyAPIProxy.title')}</div>
            <Input
              onChange={(e) => {
                updateSettings({ MIDJOURNEY_PROXY_URL: e.target.value });
              }}
              placeholder={'https://your-midjourney-proxy'}
              value={proxyURL}
            />
            <Typography.Text type={'secondary'}>
              <Trans i18nKey={'settings.MidjourneyAPIProxy.description'} ns={'common'}>
                请参考
                <Link href={'https://github.com/novicezk/midjourney-proxy'}>midjourney-proxy</Link>
                部署好服务端
              </Trans>
            </Typography.Text>
          </Flexbox>
        </Flexbox>
      </Modal>
    </>
  );
});
export default Settings;
