---
title: Урок 1 - введение
description: Установка и введение в язык C++
published_at: 2023-01-30
course: C++
---

## Про компиляцию

2 этапа создания программы:

1. Трансляция - перевод текста программы в машинный код.
2. Компоновка - сборка частей программы и подключение стандартных функций.

Трансляторами называют компиляторы - они переводят код в машинный код.

```cpp
#include <iostream>

using namespace std;

int main() {
  cout << "2+";
  cout << "2=?\n";
  cout << "Ответ: 4";

  cin.get();

  return 0;
}
```

## Заметки

`#include <iostream>` - включаем в программу библиотеку для ввода.

`using namespace std;` - использование стандартных функций c++.

`int main()` - основная программа (основная функция).

`cout` - console output, как print в питоне выводит текст. Текст для вывода
нужно вводить через стрелочку.

`endl` - новая строка.

В конце каждой команды нужно ставить точку с запятой - `;`.

Файлы в C++ имеют расширение `.cpp`

`return 0;` - завершаем программу.

## Комментарии в C++

В языке python мы могли использовать `# текст` для комментариев, в C++ для этого
используется `// текст` для комментария 1 строки, и `/* текст */` для нескольких
строк.

```cpp
// Комментарий на 1 строку

/*
  Комментарий
  на
  несколько
  строк
*/
```

Текст в комментариях игнорируется компилятором.

## Как мы всё это дело писали

Мы будем работать в программе [DevC++](https://sourceforge.net/projects/dev-cpp/files/latest/download).

Когда первый раз запускаешь программу во время первой настройки нужно выбрать
обязательно английский язык.

![Скриншот выбор языка](./cpp/language-select.webp)

Открывается пустой редактор, нажимаем file (файл), new (новый), Project...
(Проект...).

![Скриншот создание проекта](./cpp/create-new-project.webp)

Выбираем тип проекта Console Application (Консольное приложение).

![Скриншот выбор типа проекта](./cpp/select-console-application.webp)

И сохраняем проект куда-нибудь.

![Скриншот сохраняем файл](./cpp/save-project.webp)

Теперь у нас есть текстовый редактор для C++.

![Скриншот готовый редактор](./cpp/ready-editor.webp)

Нажимаем F9 для компиляции (если файл не сохранен его нужно будет сохранить), и
F10 для запуска.

![Скриншот 1000-7](./cpp/1000-7.webp)

Теперь можно делать 1000-7 в C++ ура.

## Ссылки

1. [DevC++](https://sourceforge.net/projects/dev-cpp/files/latest/download)
