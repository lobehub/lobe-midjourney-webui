<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/puzzle-piece.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/281042486-5e3b9283-9f47-4201-b468-1cb8ef86b3d5.png">

<h1>Lobe Midjourney Web UI<br/></h1>

This plugin can integrate with [Midjourney](https://www.midjourney.com/)

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

**English** · [简体中文](./README.zh-CN.md) · [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

![821shots_so](https://github.com/lobehub/lobe-midjourney-webui/assets/28616219/d9dae125-1305-4fa6-957e-6d160dc7a6fe)

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [🌟 Features](#-features)
- [🤯 Usage](#-usage)
  - [Deploy midjourney-proxy](#deploy-midjourney-proxy)
  - [Standalone Use in Web](#standalone-use-in-web)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)

####

</details>

## 🌟 Features

- 🖼️ **AI Image Generation**: The Midjourney plugin leverages AI to quickly generate a wide array of rich and diverse images from text prompts, sparking creativity and enhancing conversations.
- 🧙‍♂️ **Easy Activation**: Users can effortlessly activate the MJ plugin panel and start their image creation journey by entering natural language prompts.
- 🎚️ **Customized Prompts**: The plugin provides a custom prompt input feature, allowing users to tailor prompts to their needs, guiding the AI to create the perfect image.
- 🔗 **Seamless Integration**: Integrates smoothly with the Midjourney service by setting up the Midjourney proxy URL.
- 🛠️ **Diverse Parameters**: Supports a variety of parameter settings, giving users precise control over the style, aspect ratio, details, etc., of the images for creating visuals that meet specific needs.
- 🚀 **Quick Adaptation**: Designed for quick deployment and ease of use, enabling users to get started with simple configurations and offering a convenient image generation experience.
- 🖥️ **Dedicated Interface**: Offers a dedicated UI for users to generate and preview images in an intuitive operation panel.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

### Deploy midjourney-proxy

This plugin relies on [midjourney-proxy](https://github.com/novicezk/midjourney-proxy/) as the provider for Midjourney services. You will need to deploy a midjourney-proxy service. Please refer to the [📘 midjourney-proxy Deployment Documentation](https://github.com/novicezk/midjourney-proxy/?tab=readme-ov-file#prerequisites) or [Set up Guide](docs/Setup-Midjourney-Proxy.md) for deployment instructions.

### Standalone Use in Web

This plugin supports standalone use in web pages. You can experience it on [midjourney-webui](https://midjourney-webui.lobehub.com/).

![701shots_so](https://github.com/lobehub/lobe-midjourney-webui/assets/28616219/63e9e558-ef16-485f-ae2e-40a999ab0bc0)

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

```bash
$ git clone https://github.com/lobehub/lobe-midjourney-webui.git
$ cd lobe-midjourney-webui
$ pnpm install
$ pnpm run dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing plugin, feel free to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

- **[🤖 Lobe Chat](https://github.com/lobehub/lobe-chat)** - An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
- **[🧩 / 🏪 Plugin Index](https://github.com/lobehub/lobe-chat-plugins)** - This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for Function Calling to the user.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023-current [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[🤯-🧩-lobehub-link]: https://github.com/lobehub/lobe-chat-plugins
[🤯-🧩-lobehub-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20%26%20%F0%9F%A7%A9%20LobeHub-Plugin-95f3d9?labelColor=black&style=flat-square
[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[github-action-release-link]: https://github.com/lobehub/lobe-midjourney-webui/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-midjourney-webui/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/lobe-midjourney-webui/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-midjourney-webui/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
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
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-url]: https://github.com/lobehub
