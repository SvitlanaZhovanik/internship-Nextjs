# Internship Project

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Important information

- **Обов'язково ознайомитись зі структурою проекту**

- **Основна інформація по структурі та додаткова інформація знаходиться 👉 [тут](./API.md 'Структура')**

## Getting Started

- Склонувати проект локально

```bash
git@github.com:GoWeb-Internship/internship.git
```

- Встановити залежності для проекта

```bash
yarn install
```

- Створюємо файли `.env` в корні проекта, використовуючи `.env.example` як шаблон

## Development

### Attention:

> Зверніть увагу на те, що **backend вже задеплоєний на хостінг**
>
> Всі зміни можливі **тільки з аккаунту власника репозиторію**
>
> За замовчуванню сервер запускається з даними **heroku backend**


* запуск сервера розробки **frontend**

```bash
yarn develop
```

- запуск сервера розробки **backend** (не в цьому репозиторії)

  - _локальний сервер_ (тільки для режиму розробки): [http://localhost:1337/admin/](http://localhost:1337/admin/)
  - _сервер heroku_: [https://goweb-internship.herokuapp.com/admin](https://goweb-internship.herokuapp.com/admin)

_локальний сервер_: [http://localhost:3000](http://localhost:3000)

- для запуску с локальним бекендом змінюємо `.env` (по дефолту вже все змінено)

```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

## Strapi credentials:

---

- login:

```bash
 dkhvorostianyi@goit.ua
```

- password:

```bash
fhD75r6CRi3eX6P
```
