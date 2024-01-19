# 设置 `midjourney-proxy`

这是设置 Midjourney-Proxy 的指南，但不是设置`midjourney-proxy`
的唯一方法。更多信息请参考 [midjourney-proxy](https://github.com/novicezk/midjourney-proxy/)仓库。

## 先决条件

你需要在你的机器上安装 `docker`。请参考 [docker 安装指南](https://docs.docker.com/get-docker/) 获取安装说明。

## 步骤

1. 从 docker hub 拉取 docker 镜像。你可以在 [docker hub](https://hub.docker.com/r/novicezk/midjourney-proxy) 查看最新版本。
   ```bash
   $ docker pull novicezk/midjourney-proxy:2.5.5
   ```
2. 创建一个目录用于存放`midjourney-proxy`配置文件，并显示路径。
   ```bash
   $ mkdir midjourney-proxy-configs
   $ cd midjourney-proxy-configs
   $ pwd
   /path/to/midjourney-proxy-configs
   ```
3. 在该目录中创建 `application.yml` 文件。例如：
   ```yaml
   mj:
     task-store:
       type: in_memory # 可选
       timeout: 60d # 可选
     translate-way: null # 可选
     accounts:
       - guild-id: 12345 # 你的discord服务器的guild id
         channel-id: 12345 # 你的discord频道的channel id
         user-token: abcde # 你的discord机器人的user token
         user-agent: user agent # 可选：比如 "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
         timeout-minutes: 10 # 可选
         queue-size: 15 # 可选
         core-size: 5 # 可选
     proxy:
       host: host.docker.internal # 可选。如果你想在docker中使用代理，不要更改此项。
       port: 12345 # 可选
   ```
   查看 [配置文档](https://github.com/novicezk/midjourney-proxy/blob/main/docs/config.md)
   获取更多信息。查看 [README](https://github.com/novicezk/midjourney-proxy/tree/main#使用前提) 看获取 guild id, channel
   id, user token 和 user agent 的方法。
4. 运行 docker 镜像。
   ```bash
   $ docker run -d --name midjourney-proxy -p 123:456 -v /path/to/midjourney-proxy-configs:/home/spring/config --add-host=host.docker.internal:host-gateway novicezk/midjourney-proxy:2.5.5
   ```
   这会：
   - 将容器的 456 端口发布到宿主机的 123 端口。你可以根据需要更改端口号。
   - 将 `/path/to/midjourney-proxy-configs` 目录挂载到容器中的 `/home/spring/config` 目录。
   - 在容器的 `/etc/hosts` 文件中添加 `host.docker.internal`。如果你想在 docker 中使用代理，这是必要的。
5. 检查容器的日志。如果一切顺利，你应该在日志中看不到错误或警告。
   ```bash
   $ docker logs midjourney-proxy
   ```
6. 完成所有步骤后，你可以检查 `http://<YOUR-MIDJOURNEY-PROXY-IP>:<PORT>/mj` 来查看 `midjourney-proxy` 提供的所有 API。
