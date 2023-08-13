FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.21.1-alpine

WORKDIR /app

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
