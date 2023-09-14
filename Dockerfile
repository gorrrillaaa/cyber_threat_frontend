FROM node:16.13.2-alpine as build_container
WORKDIR /build
COPY ["package*.json", "jsconfig.json", "babel.config.js", "vue.config.js","/build/"]
RUN npm i @vue/cli@latest
COPY . ./
RUN yarn build

FROM nginx:stable-alpine as production
COPY --from=build_container /build/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

