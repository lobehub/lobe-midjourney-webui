import { ActionIcon, DiscordIcon, Logo } from '@lobehub/ui';
import { LucideGithub } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DISCORD_URL, GITHUB_REPO } from '@/const/url';
import Settings from '@/features/Settings';

const Header = memo(() => (
  <Flexbox align={'center'} horizontal justify={'space-between'}>
    <Logo extra={'Midjourney WebUI'} type={'combine'} />
    <Flexbox horizontal>
      <Link href={DISCORD_URL} style={{ color: 'inherit' }} target={'_blank'}>
        <ActionIcon icon={DiscordIcon} title={'Discord'} />
      </Link>
      <Link href={GITHUB_REPO} style={{ color: 'inherit' }} target={'_blank'} title={'Github Repo'}>
        <ActionIcon icon={LucideGithub} />
      </Link>
      <Settings />
    </Flexbox>
  </Flexbox>
));

export default Header;
