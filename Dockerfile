FROM mhart/alpine-node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

# Production
# RUN npm ci --only=production
COPY . .

EXPOSE 3000