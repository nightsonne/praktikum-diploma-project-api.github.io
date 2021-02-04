# praktikum-diploma-project-api.github.io

### api для дипломной работы на курсе webdev
В данном проекте создан сервер на express.js и связан с БД MongoDB. Приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/newsdb

API развернут на облачном сервисе cloud.yandex.ru

Публичный IP-адрес сервера: 84.201.156.246.

Доменные имена https://nightsonne-newsapi.students.nomoreparties.xyz и https://www.nightsonne-newsapi.students.nomoreparties.xyz доступны по протоколам http и https

Запросы, которые обрабатывает сервер:

- запрос GET /signup создает пользователя в БД, при регистрации необходимо заполнить поля name, email, password;
- запрос GET /signin позволяет авторизоваться уже созданному пользователю по емейлу и паролю;
- запрос GET /users/me возвращает информацию о пользователе для авторизованного пользователя;
- запрос GET /articles возвращает все сохранённые пользователем статьи для авторизованного пользователя;
- запрос POST /articles создаёт статью;
- запрос DELETE /articles/:articleId удаляет статью конкретного пользователя, другой пользователь не может удалить чужую карточку

### Версия проекта:
v1.0.0

### Автор:
Татьяна Лунькова

### npm-пакеты:
- bcryptjs: 2.4.3,
- body-parser: 1.19.0,
- express: 4.17.1,
- jsonwebtoken: 8.5.1,
- mongoose: 5.11.10,
- validator: 13.5.2,
- celebrate: 13.0.4,
- dotenv: 8.2.0,
- winston: 3.3.3,
- express-winston: 4.0.5,
- helmet: 4.3.1

### Запуск сервера:
`npm run start` - production
`npm run dev` - development
