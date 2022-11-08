export default function Lesson() {
	return (
		<div>
			<header>
				<title>Урок 3 - Лёшапомоги</title>
			</header>

			<div>
				<h1>Случайные числа</h1>
				<code className="language-cpp">
					<pre>
						{`#include <iostream>
#include <cstdlib>

using namespace std;

int main() {
	int x, y;
	x = rand(); // x - случайное число
	y = rand(); // y - случайное число

	cout << x << y;
}`}
					</pre>
				</code>
				<h2>Генератор на отрезке</h2>
				<code>[o, RAND_MAX]</code>
				<h2>Целые числа на отрезке [a, b]</h2>

				<code className="language-cpp">
					<pre>
						{`#include <iostream>
#include <cstlib>

using namespace std;

int main() {
	int x, y;
	x = a + rand() % (b - a + 1); // x - случайное число от a до b
	y = a + rand() % (b - a + 1); // y - случайное число от a до b

	cout << x << y;
}`}
					</pre>
				</code>
				<h2 id="ссылки">Ссылки</h2>
				<ul>
					<li>А нет их</li>
				</ul>
			</div>
		</div>
	);
}
