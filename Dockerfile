FROM node:12.16.1-alpine3.11

WORKDIR /mano-flaggerson

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000