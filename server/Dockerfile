# Выбираем базовый образ
FROM node:alpine

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения в контейнер
COPY . .

# Делаем сборку приложения
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 8000

# Запускаем приложение
CMD [ "node", "build/index.js" ]