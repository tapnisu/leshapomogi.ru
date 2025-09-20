---
title: Урок 3 - Маршрутизация (Routing)
slug: flask-3-routing
description: Маршрутизация и как её можно использовать
published_at: 2024-01-12
course: Flask
---
## Что такое Маршрутизация?

Современные веб-приложения используют осмысленные URL-адреса, чтобы помочь
пользователям. Пользователи более вероятно вернуться на страницу, если она имеет
понятный URL-адрес, который они могут запомнить и использовать для прямого
перехода на страницу.

## Как ее использовать в Flask

Используйте декоратор `route()` для привязки функции к URL-адресу.

Создадим файл `app.py` с данным кодом

```py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World'
```

## Запуск приложения

Так как мы назвали наш файл с проектом `app.py`, мы можем не указывать входной
файл через `--app <название файла>`:

```sh
flask run
```

> Так как мы еще разрабатываем приложение я буду использовать `localhost:5000`
> как базовый путь.

Мы создали маршруты [localhost:5000/](http://localhost:5000/) и
[localhost:5000/hello](http://localhost:5000/hello). Можете их проверить.

## Ссылки

1. [Routing - Quickstart - Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/#routing)
