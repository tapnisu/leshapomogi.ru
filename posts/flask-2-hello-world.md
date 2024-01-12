---
title: Урок 2 - Привет мир!
description: Создание 1 приложения на Flask (Hello world)
published_at: 2024-01-12
course: Flask
---

## Привет мир!

Создадим файл `hello.py` с данным кодом

```py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

### Разбор кода

1. Импортируем класс `Flask` из модуля `flask`

```py
from flask import Flask
```

2. Создаем объект с _приложением_ (переменная `app`) при помощи класса `Flask` (который мы импортировали ранее).

```py
app = Flask(__name__)
```

3. Создаем _route_ (с англ: путь). Функция будет выполнена при получении запроса по определенному URL-адресу. Для создания _route_ используются [Декораторы](https://habr.com/ru/companies/otus/articles/727590/) (`@app.route("/")`, где `"/"` - сам путь в адресе (`/` - корень))

```py
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Функция возвращает `"<p>Hello, World!</p>"`. Это HTML код. `<p>` - параграф

## Запускаем наше приложение

```sh
flask --app hello run
```

Где `hello` - название нашего файла.

## Ссылки

1. [A Minimal Application - Quickstart - Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/#a-minimal-application)
