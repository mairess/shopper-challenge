FROM node:20.9.0-alpine3.18

LABEL authors="maires"

WORKDIR /app

COPY package*.json /app

RUN npm ci

EXPOSE 3001

COPY . /app

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
