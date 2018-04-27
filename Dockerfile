FROM node:9-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon typescript mocha

COPY package.json package.json
RUN npm install && mv node_modules /node_modules

COPY . .

LABEL maintainer="William Cantin <william@wcantin.ca>"

CMD node server.js
