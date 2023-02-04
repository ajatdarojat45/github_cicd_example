FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g nodemon

CMD ["nodemon", "www.js"]

EXPOSE 3000
