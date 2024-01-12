---
title: Урок 4 - Переменные в маршрутизации
description: Как использовать переменные в маршрутах и задавать им правила
published_at: 2024-01-12
course: Flask
---

Правила для переменных
Вы можете добавлять разделы с переменными в URL-адрес, помечая разделы при помощи `<имя_переменной>`. Затем ваша функция получает `<имя_переменной>` в качестве аргумента. При желании вы можете использовать конвертер, чтобы указать тип аргумента, например `<конвертер:имя_переменной>`.

```py
from markupsafe import escape

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f'Post {post_id}'

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f'Subpath {escape(subpath)}'
```

### Типы конверторов:

|           Тип           |                             Описание                             |
| :---------------------: | :--------------------------------------------------------------: |
| `string` (по умолчанию) |              Принимает любой текст без слэшей (`/`)              |
|          `int`          |                  Принимает положительные числа                   |
|         `float`         | Принимает положительные нецелые числа (числа с плавающей точкой) |
|         `path`          |              строка, но также принимает слэши (`/`)              |
|         `uuid`          |   принимает [UUID](https://ru.wikipedia.org/wiki/UUID) строки    |

## HTML Escaping

По умолчанию Flask отправляет ответы в формате HTML. Из-за этого могут случиться нежелательные эффекты с изменениям контента или даже уязвимости в коде.

Для исправления мы можем использовать модуль `markupsafe` (устанавливается вместе с Flask). И его функцию `escape`.

```py
from markupsafe import escape

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"
```

## Ссылки

1. [Variable Rules - Quickstart - Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/#variable-rules)
2. [HTML Escaping - Quickstart - Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/#html-escaping)
