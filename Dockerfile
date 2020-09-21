FROM node:alpine

RUN apk add --no-cache bash

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

# Copying source files
COPY . .

# Building and running the app
CMD [ "/bin/bash", "yarn install && yarn run build && yarn run start" ]
