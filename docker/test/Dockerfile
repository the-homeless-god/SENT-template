FROM cypress/base

WORKDIR /var/www/web/test

COPY . .

RUN npm install -g cypress
RUN npm ci
