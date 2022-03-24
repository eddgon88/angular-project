# Stage 1
FROM node:10-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2
FROM nginx

COPY --from=build-step /app/dist/pad-pdp-payments-ldp-front/ /usr/share/nginx/html/link
RUN chown -R nginx:nginx /usr/share/nginx
COPY default.conf  /etc/nginx/conf.d/