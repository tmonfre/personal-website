FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=80

EXPOSE 80

CMD ["node", "app.js"]
