FROM node:16 as build-app

WORKDIR /web/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=build-app /web/app/build /usr/share/nginx/html
COPY --from=build-app /web/app/.env /usr/share/nginx/html/.env
RUN rm /etc/nginx/conf.d/default.conf
# COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx","-g","daemon off;"]