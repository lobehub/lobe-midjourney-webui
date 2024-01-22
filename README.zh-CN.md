<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/puzzle-piece.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/281042486-5e3b9283-9f47-4201-b468-1cb8ef86b3d5.png">

<h1>Lobe Midjourney Web UI<br/></h1>

此应用可以与 [Midjourney](https://www.midjourney.com/) 集成

[![][🤯-🧩-lobehub-shield]][🤯-🧩-lobehub-link]
[![][github-release-shield]][github-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[English](./README.md) · **简体中文** · [更新日志](./CHANGELOG.md) · [报告问题][github-issues-link] · [请求功能][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

![821shots_so](https://github.com/lobehub/lobe-midjourney-webui/assets/28616219/d9dae125-1305-4fa6-957e-6d160dc7a6fe)

<details>
<summary><kbd>目录</kbd></summary>

#### 目录

- [🌟 特性](#-features)
- [🤯 使用方法](#-usage)
  - [部署 midjourney-proxy](#部署-midjourney-proxy)
- [⌨️ 本地开发](#️-local-development)
- [🤝 贡献](#-contributing)
- [🔗 链接](#-links)

####

</details>

## 🌟 特性

- 🖼️ **AI 图片生成**：Midjourney 插件利用 AI 技术，根据用户的文本提示快速生成丰富多样的图片，激发创造力，美化对话。
- 🧙‍♂️ **轻松激活**：用户可以轻松激活 MJ 插件面板，仅通过输入自然语言即可开始图片创建之旅。
- 🎚️ **自定义提示**：提供自定义提示输入功能，允许用户根据自己的需求定制提示，引导 AI 创建理想的图像。
- 🔗 **无缝集成**：通过配置 Midjourney 代理 URL 实现插件与 Midjourney 服务的无缝集成。
- 🛠️ **多样参数**：支持一系列参数设置，使用户能够精确控制图片的风格、比例、细节等，创造出满足特定需求的视觉作品。
- 🚀 **快速适应**：插件设计用于快速部署和易用性，使用户能够通过简单设置启用它，并提供便捷的图片生成体验。
- 🖥️ **专用界面**：提供专用 UI 界面，允许用户在直观的操作面板中生成和预览图像。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 使用方法

### 部署 midjourney-proxy

本插件基于 [midjourney-proxy](https://github.com/novicezk/midjourney-proxy/) 作为 Midjourney 服务的提供方，你需要自行部署一个 midjourney-proxy 服务。部署方法请参考 [📘 midjourney-proxy 部署文档](https://github.com/novicezk/midjourney-proxy/?tab=readme-ov-file#%E4%BD%BF%E7%94%A8%E5%89%8D%E6%8F%90) 或者 [指南](docs/Setup-Midjourney-Proxy.zh-CN.md)。

### 在 Web 中独立使用

本插件支持在网页中独立使用，可以在 [midjourney-webui](https://midjourney-webui.lobehub.com/) 中体验。

![701shots_so](https://github.com/lobehub/lobe-midjourney-webui/assets/28616219/63e9e558-ef16-485f-ae2e-40a999ab0bc0)

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ 本地开发

您可以使用 Github Codespaces 进行在线开发：

[![][github-codespace-shield]][github-codespace-link]

或克隆它进行本地开发：

```bash
$ git clone https://github.com/lobehub/lobe-midjourney-webui.git
$ cd lobe-midjourney-webui
$ pnpm run install
$ pnpm run dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 贡献

欢迎各种形式的贡献，如果您有兴趣贡献插件，请随时向我们展示您的才华。

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 链接

- **[🤖 Lobe Chat](https://github.com/lobehub/lobe-chat)** - 一个开源的、可扩展的（函数调用）、高性能的聊天机器人框架。它支持一键免费部署您的私有 ChatGPT/LLM 网页应用程序。
- **[🧩 / 🏪 插件索引](https://github.com/lobehub/lobe-chat-plugins)** - 这是 LobeChat 的插件索引。它从该存储库访问 index.json，向用户显示可用的函数调用插件列表。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 许可证

版权所有 © 2023 - 至今 [LobeHub][profile-url]. <br />
本项目根据 [MIT](./LICENSE) 许可证授权。

<!-- 链接组 -->

[🤯-🧩-lobehub-link]: https://github.com/lobehub/lobe-chat-plugins
[🤯-🧩-lobehub-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20%26%20%F0%9F%A7%A9%20LobeHub-Plugin-95f3d9?labelColor=black&style=flat-square
[back-to-top]: https://img.shields.io/badge/-返回顶部-151515?style=flat-square
[github-action-release-link]: https://github.com/lobehub/lobe-midjourney-webui/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-midjourney-webui/release.yml?label=发布&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/lobe-midjourney-webui/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-midjourney-webui/test.yml?label=测试&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/lobe-midjourney-webui
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/lobe-midjourney-webui/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Flobe-midjourney-webui
[github-contributors-link]: https://github.com/lobehub/lobe-midjourney-webui/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-midjourney-webui?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-midjourney-webui/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-midjourney-webui?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-midjourney-webui/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-midjourney-webui?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-midjourney-webui/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-midjourney-webui?color=white&labelColor=black&style=flat-square
[github-release-link]: https://github.com/lobehub/lobe-midjourney-webui/releases
[github-release-shield]: https://img.shields.io/github/v/release/lobehub/lobe-midjourney-webui?color=369eff&labelColor=black&logo=github&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-midjourney-webui/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-midjourney-webui?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-midjourney-webui/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-midjourney-webui?color=ffcb47&labelColor=black&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/lobe-midjourney-webui/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20欢迎投稿-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-url]: https://github.com/lobehub
