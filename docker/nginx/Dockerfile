FROM nginx:stable

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/web/public

COPY public .
COPY __sapper__/build/client ./client
COPY __sapper__/build/template.html .
COPY __sapper__/build/service-worker.js .
COPY __sapper__/build/build.json .
COPY __sapper__/build/index.js .

CMD ["nginx"]
