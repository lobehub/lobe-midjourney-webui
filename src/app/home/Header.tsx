import { Midjourney } from '@lobehub/icons';
import { ActionIcon, DiscordIcon, Logo } from '@lobehub/ui';
import { Book, LucideGithub } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DISCORD_URL, GITHUB_REPO, MJ_DOCS } from '@/const/url';
import Settings from '@/features/Settings';

const Header = memo(() => {
  const { t } = useTranslation('common');
  return (
    <Flexbox align={'center'} horizontal justify={'space-between'}>
      <Logo extra={<Midjourney.Combine size={32} />} type={'combine'} />
      <Flexbox horizontal>
        <Link href={DISCORD_URL} style={{ color: 'inherit' }} target={'_blank'}>
          <ActionIcon icon={DiscordIcon} title={'Discord'} />
        </Link>
        <Link href={GITHUB_REPO} style={{ color: 'inherit' }} target={'_blank'} title={'Github'}>
          <ActionIcon icon={LucideGithub} />
        </Link>
        <Link href={MJ_DOCS} style={{ color: 'inherit' }} target={'_blank'} title={t('docs')}>
          <ActionIcon icon={Book} />
        </Link>
        <Settings />
      </Flexbox>
    </Flexbox>
  );
});

export default Header;
