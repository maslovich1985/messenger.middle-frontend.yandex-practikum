FROM node:16

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install

# копируем исходный код
COPY . /usr/src/app

RUN npm run build

EXPOSE 8080

CMD node src/server.js