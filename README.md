<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/puzzle-piece.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/rocket.webp">

<h1>Plugin Template<br/><sup>LobeChat Plugin</sup></h1>

This is the plugin template for LobeChat plugin development

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

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [🌟 Features](#-features)
- [🤯 Usage](#-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)

####

</details>

## 🌟 Features

- [x] 💨 **Quick start with low learning curve**: This template provides a quick start option, allowing users to get started quickly. Additionally, the template includes detailed documentation to help users understand and use the features easily.
- [x] 📚 **Beautiful and comprehensive documentation**: The template aims for aesthetics, with carefully designed interfaces and layouts that make the documentation more intuitive, readable, and user-friendly. Moreover, the template offers a wide range of styles and components for users to customize the appearance and functionality of their documentation.
- [x] 🔄 **Complete workflow, automatic publishing and partner updates**: The template provides a complete workflow, including automatic publishing and automatic partner updates. Users can easily complete the publishing and updating tasks by following the specified steps.
- [x] 🖱️ **One-click document generation**: The template offers a one-click document generation feature, allowing users to quickly generate complete documentation with simple operations. This saves users a significant amount of time and effort, allowing them to focus on improving the content and quality of their documentation.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

> [!IMPORTANT]\
> See detail on [📘 Template usage](https://chat-plugin-sdk.lobehub.com/guides/template)

> [!Note]\
> Plugins provide a means to extend the [Function Calling][fc-link] capabilities of LobeChat. They can be used to introduce new function calls, and even new ways to render message results. If you are interested in plugin development, please refer to our [📘 Plugin Development Guide](https://github.com/lobehub/lobe-chat/wiki/Plugin-Development) in the Wiki.
>
> - [@lobehub/lobe-chat-plugins][lobe-chat-plugins]: This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for LobeChat to the user.
> - [@lobehub/chat-plugin-sdk][chat-plugin-sdk]: The LobeChat Plugin SDK assists you in creating exceptional chat plugins for Lobe Chat.
> - [@lobehub/chat-plugins-gateway][chat-plugins-gateway]: The LobeChat Plugins Gateway is a backend service that serves as a gateway for LobeChat plugins. We deploy this service using Vercel. The primary API POST /api/v1/runner is deployed as an Edge Function.

| Official Plugin                                 | Description                                                                                                                                       |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SearchEngine][chat-plugin-search-engine]       | This plugin allows for the use of the SerpApi search engine.                                                                                      |
| [RealtimeWeather][chat-plugin-realtime-weather] | This plugin provides practical weather information by obtaining real-time weather data and can automatically update based on the user's location. |
| [WebsiteCrawler][chat-plugin-web-crawler]       | This plugin automatically crawls the main content of a specified URL webpage and uses it as context input.                                        |

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/lobehub/chat-plugin-template.git
$ cd chat-plugin-template
$ bun install
$ bun dev
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

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[🤯-🧩-lobehub-link]: https://github.com/lobehub/lobe-chat-plugins
[🤯-🧩-lobehub-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20%26%20%F0%9F%A7%A9%20LobeHub-Plugin-95f3d9?labelColor=black&style=flat-square
[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[chat-plugin-realtime-weather]: https://github.com/lobehub/chat-plugin-realtime-weather
[chat-plugin-sdk]: https://github.com/lobehub/chat-plugin-sdk
[chat-plugin-search-engine]: https://github.com/lobehub/chat-plugin-search-engine
[chat-plugin-web-crawler]: https://github.com/lobehub/chat-plugin-web-crawler
[chat-plugins-gateway]: https://github.com/lobehub/chat-plugins-gateway
[fc-link]: https://sspai.com/post/81986
[github-action-release-link]: https://github.com/lobehub/chat-plugin-template/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/chat-plugin-template/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/chat-plugin-template/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/chat-plugin-template/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/chat-plugin-template
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/chat-plugin-template/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Fchat-plugin-template
[github-contributors-link]: https://github.com/lobehub/chat-plugin-template/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/chat-plugin-template?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/chat-plugin-template/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/chat-plugin-template?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/chat-plugin-template/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/chat-plugin-template?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/chat-plugin-template/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/chat-plugin-template?color=white&labelColor=black&style=flat-square
[github-release-link]: https://github.com/lobehub/chat-plugin-template/releases
[github-release-shield]: https://img.shields.io/github/v/release/lobehub/chat-plugin-template?color=369eff&labelColor=black&logo=github&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/chat-plugin-template/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/chat-plugin-template?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/chat-plugin-template/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/chat-plugin-template?color=ffcb47&labelColor=black&style=flat-square
[lobe-chat-plugins]: https://github.com/lobehub/lobe-chat-plugins
[pr-welcome-link]: https://github.com/lobehub/chat-plugin-template/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-url]: https://github.com/lobehub
