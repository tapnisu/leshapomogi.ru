---
title: Урок 1 - Установка
description: Установка Flask
published_at: 2024-01-12
course: Flask
---

## Минимальные требования

Flask требует версию _python >= 3.8_

## Создание проекта

Создадим папку с названием нашего проекта (у меня это будет `myproject`)

```sh
mkdir myproject
cd myproject
python -m venv .venv
```

> На _linux_ используйте _python3_ вместо _python_.

### Что же делает то, что мы сейчас запустили?

1. Мы создаем папку с названием `myproject` при помощи команды `mkdir`

   ```sh
   mkdir myproject
   ```

2. Мы переходим в нашу папку `myproject` при помощи команды `cd`

   ```sh
   cd myproject
   ```

3. Мы создаем виртуальную среду при помощи модуля `venv`

   ```sh
   python -m venv .venv
   ```

> На linux используйте _python3_ вместо _python_.

### Что такое виртуальная среда и зачем она нам нужна?

[Виртуальная среда](https://docs.python.org/3/tutorial/venv.html) позволяет устанавливать модули (зависимости) не глобально, а только для определенного проекта.

Позволяет устанавливать разные версии пакетов для разных проектов на 1 пк.

## Как активировать виртуальную среду?

### Windows:

```sh
.venv\Scripts\activate
```

### Linux:

```sh
. .venv/bin/activate
```

## Установка Flask

```sh
pip install Flask
```

## Ссылки

1. [Installation - Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/installation/)
