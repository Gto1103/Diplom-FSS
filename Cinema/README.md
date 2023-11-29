# Дипломный проект по профессии «Веб-разработчик»

## Доступ администратора:

-   **login:** admin@mail.ru
-   **password:** 11111111
-   /admin/login

## Версии используемого ПО:

PHP ver. 8.1, Laravel ver. 10.10.0, Composer, JS, React, mysql

## Запуск:

1. Клонировать репозиторий:

```
$ git clone {url репозитория}
```

2. Установить сервер:

```
composer install
```

3. Проверить, чтобы файл .env.example, был скопирован в .env, в корень проекта (в нём хранятся настройки). Если что, сделать это вручную.

4. Создать миграции:

```
php artisan migrate
```

5. Наполнить базу данных информацией (данные администратора, предустановленные фильмы):

```
php artisan db:seed
```

6. Установить пакеты из package.json, для работы frontend'a:

```
npm install
```

7. Запустить сервер frontend'a и backend'a:

```
npm run dev
php artisan serve
```
