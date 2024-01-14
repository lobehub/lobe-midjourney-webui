import { defineConfig } from 'dumi';
import path from 'node:path';

import { homepage } from '../package.json';

const isWin = process.platform === 'win32';

const isProd = process.env.NODE_ENV === 'production';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: 'https://github.com/lobehub/lobe-chat',
      text: 'Try it on LobeChat',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  name: 'Project Template',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
};

export default defineConfig({
  alias: {
    '@': path.join(__dirname, '../src'),
  },
  base: isProd ? '/docs/' : '/',
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/package.webp',
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  outputPath: '../public/docs',

  publicPath: isProd ? '/docs/' : '/',
  // ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],

  themeConfig,
  title: 'Project Template - Lobe Chat Plugin',
});
