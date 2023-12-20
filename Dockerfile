


FROM node:21.4-alpine as node
COPY . /shlink-web-client
ARG VERSION="latest"
ENV VERSION ${VERSION}
RUN cd /shlink-web-client && npm ci && npm run build

FROM nginxinc/nginx-unprivileged:1.25-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"

# Switch to root to perform necessary operations
USER root
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf

# Copy necessary files
COPY config/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY scripts/docker/servers_from_env.sh /docker-entrypoint.d/30-shlink-servers-json.sh
COPY --from=node /shlink-web-client/build /usr/share/nginx/html

# Switch back to non-root user
USER nginx
