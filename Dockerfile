FROM node:20-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . .
RUN npm install
RUN npm run build

FROM nginx as prod
ADD nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/spa /usr/share/nginx/html
