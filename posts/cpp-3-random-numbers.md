---
title: C++ Урок 3 - случайные числа
description: Случайные числа и с чем их едят
published_at: 2023-12-24
---

## Простая генерация чисел

```cpp
#include <iostream>
#include <cstdlib> // Подключаем библиотеку для случайных чисел

using namespace std;

int main() {
	int x, y;

	x = rand(); // x - случайное число
	y = rand(); // y - случайное число

	cout << x << endl << y;
}
```

`rand()` - даёт нам случайное число

## Генератор на отрезке `[o, RAND_MAX]` (Целые числа на отрезке [a, b])

```cpp
#include <iostream>
#include <cstdlib> // Подключаем библиотеку для случайных чисел

using namespace std;

int main() {
	int x, y;

	x = a + rand() % (b - a + 1); // x - случайное число от a до b
	y = a + rand() % (b - a + 1); // y - случайное число от a до b

	cout << x << y;
}
```
