FROM node
COPY package.json /app/package.json
COPY . /home/app/
WORKDIR /home/app/