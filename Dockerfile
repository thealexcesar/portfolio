FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install && yarn add sass sass-loader
COPY . .

CMD ["yarn", "dev"]