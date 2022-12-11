FROM node:18-alpine AS build

WORKDIR /app/client

# COPY ./client/package.json ./
# COPY ./client/package-lock.json ./
COPY ./client ./

RUN npm ci --silent
RUN npm run build

# ENV PATH="./node_modules/.bin:$PATH"

# RUN npm run build

FROM nginx:1.23.2-alpine

COPY --from=build /app/client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# RUN apk --no-cache add curl
# RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.2.0/envsubst-`uname -s`-`uname -m` -o envsubst
# RUN chmod +x envsubst 
# RUN mv envsubst /usr/local/bin

# COPY ./nginx.config /etc/nginx/nginx.template

# CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

# COPY --from=builder /opt/web/build /usr/share/nginx/html
