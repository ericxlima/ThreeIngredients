FROM node:18-alpine AS build

WORKDIR /app/client

COPY ./client ./

RUN npm ci --silent
RUN npm run build

FROM nginx:1.23.2-alpine

COPY --from=build /app/client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
