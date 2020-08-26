FROM node:alpine

# Install pnpm
RUN npm i -g pnpm

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

# Copying source files
COPY . .

# Building and running the app
CMD [ "/bin/ash", "entrypoint.sh" ]