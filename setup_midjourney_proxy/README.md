# Set up `midjourney-proxy`

This is an opinionated guide to setting up `midjourney-proxy`. It is not the only way to set up Midjourney-Proxy. For
more information, please refer to [midjourney-proxy](https://github.com/novicezk/midjourney-proxy/) repo.

## Prerequisites

You need to have `docker` on you machine. Please refer
to [docker installation guide](https://docs.docker.com/get-docker/) for installation instructions.

## Steps

1. Pull the docker image from docker hub. You can check the latest version
   on [docker hub](https://hub.docker.com/r/novicezk/midjourney-proxy).
   ```bash
   $ docker pull novicezk/midjourney-proxy:2.5.5
   ```
2. Create a directory for `midjourney-proxy` configuration files and show the path.
   ```bash
   $ mkdir midjourney-proxy-configs
   $ cd midjourney-proxy-configs
   $ pwd
   /path/to/midjourney-proxy-configs
   ```
3. Create `application.yml` file in the directory. For example:
   ```yaml
   mj:
     task-store:
       type: in_memory # OPTIONAL
       timeout: 60d # OPTIONAL
     translate-way: null # OPTIONAL
     accounts:
       - guild-id: 12345 # guild id of your discord server
         channel-id: 12345 # channel id of your discord channel
         user-token: abcde # user token of your discord bot
         user-agent: user agent # OPTIONAL: like "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
         timeout-minutes: 10 # OPTIONAL
         queue-size: 15 # OPTIONAL
         core-size: 5 # OPTIONAL
     proxy:
       host: host.docker.internal # OPTIONAL. DON'T change this if you want to use proxy in docker.
       port: 12345 # OPTIONAL
   ```
   Check [Configuration Documentation](https://github.com/novicezk/midjourney-proxy/blob/main/docs/config.md) for more
   information. Check [the README](https://github.com/novicezk/midjourney-proxy/tree/main#使用前提) to learn how to get
   the guild id, channel id, user token and user agent.
4. Run the docker image.
   ```bash
   $ docker run -d --name midjourney-proxy -p 123:456 -v /path/to/midjourney-proxy-configs:/home/spring/config --add-host=host.docker.internal:host-gateway novicezk/midjourney-proxy:2.5.5
   ```
   This will:
   - publish the port 456 of the container to the port 123 of the host machine. You can change the port number as you
     like.
   - mount the `/path/to/midjourney-proxy-configs` directory to `/home/spring/config` directory in the container.
   - add `host.docker.internal` to the container's `/etc/hosts` file. This is necessary if you want to use proxy in
     docker.
5. Check the logs of the container. If everything goes well, you should see no errors or warnings in the logs.
   ```bash
   $ docker logs midjourney-proxy
   ```
6. Once all the steps are done, you can check `http://<YOUR-MIDJOURNEY-PROXY-IP>:<PORT>/mj` to see all the APIs served
   by `midjourney-proxy`.
