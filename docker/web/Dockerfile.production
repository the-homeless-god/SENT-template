FROM node:lts-alpine

WORKDIR /var/www/web

COPY package.json .
COPY __sapper__/build ./__sapper__/build
COPY public ./public

EXPOSE 3000
