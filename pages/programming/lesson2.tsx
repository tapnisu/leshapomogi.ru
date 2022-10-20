import type { NextPage } from "next";
import Head from "next/head";
import { BiArrowBack } from "react-icons/bi";

const Lesson1: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Урок 2 - Лёшапомоги</title>
				<meta name="description" content="ЛЁША ПОМОГИ!" />
				<link rel="icon" href="/public/favicon.ico" />
			</Head>

			<main className="bg-white dark:text-white dark:bg-neutral-900 md:bg-neutral-100 md:dark:bg-black">
				<div className="p-4 md:fixed">
					<a href="/" className="text-xl">
						<BiArrowBack />
					</a>
				</div>

				<div className="min-h-screen md:flex md:flex-column md:flex-wrap md:content-center md:justify-center md:items-center p-4">
					<div className="md:p-8 md:rounded-3xl md:bg-white md:dark:bg-neutral-900">
						<div className="prose dark:prose-invert">
							<h1>Арифметические операции</h1>
							Переменная – это величина, имеющая имя, тип и значение. Значение
							переменной можно изменять во время работы программы. В переменной
							хранятся данные <b>ТОЛЬКО</b> указанного! (простое объяснение,
							переменная - это коробка, в которую вы можете положить вещь только
							нужного вида - в коробку с машинками только машинки)
							{/* <Image src="/public/" /> */}
							<h2>Как называть переменные?</h2>
							<ul>
								<li>
									Только английскими буквами (как заглавными, так и строчными):
									peremennaya
								</li>
								<li>
									Название не может начинаться с цифры: <s>10007peremennaya</s>{" "}
									- неверно
								</li>
								<li>Может иметь цифру не в начале: perepennaya10007</li>
								<li>
									Можно использовать нижнее подчеркивание: deadinside_1000_7
								</li>
							</ul>
							<h2>Объявление переменных</h2>
							При объявлении переменной нужно указать тип переменной: число,
							строка и т.д. <code>int a;</code> - создаём переменную a с типом
							int (целое число) Так же в 1 строчку можно создавать несколько
							переменных:
							<code>int a, b, c</code> - создали переменные a, b, c с типом
							целое число (int).
							<h2>Как записать значение в переменную?</h2>
							Для объявления переменной с начальным значением просто укажите
							значение после равно: <code>int a = 993;</code> - создали
							переменную a со значением 993; Так же можно объявлять сразу
							несколько переменных со значениями:{" "}
							<code>int a, b = 1, c = 55;</code> - создали переменные с целыми
							числами: a - без значения, b = 1, c = 55.
							<h2>Изменение значения переменной</h2>
							Если у нас уже объявлена переменная, мы можем заменить её
							значение:
							<code className="language-cpp">
								int a = 5; // Создаём переменную
								{"cout << a;"} // выведет число 5 a = 993 // Записываем в
								переменную a значение 993.
								{"cout << a;"} // выведет число 993, так как мы заменили прошлое
								в переменной.
							</code>
							<code>=</code> это оператор присваивания.
							<br />
							(Когда мы заменяем значение переменной мы убираем прошлое значение
							из коробочки, и складываем новое.)
							<ol>
								<li>
									Оператор – это команда языка программирования (инструкция).
								</li>
								<li>
									Оператор присваивания – это команда для записи нового значения
									в переменную.
								</li>
							</ol>
							<h2>Ввод данных с клавиатуры</h2>
							<code>{"cin >> a;"}</code> - мы вводим значение с клавиатуры и
							записываем его в переменную a. (Ввод заканчивается при нажатии
							enter на клавиатуре)
							<h2>Ввод значений двух переменных</h2>
							<code>{"cin >> a >> b;"}</code> - если мы введем с клавиатуры{" "}
							<code>25 30</code>, то в переменную a запишется 25, а в b
							запишется 30.
							<br />
							Также можно ввести на разных строках:
							<pre>
								<code>25{"\n"}30</code>
							</pre>
							Тогда в переменную a запишется 25, а в b запишется 30.
							<h3>Пример</h3>
							<pre>
								<code className="language-cpp">
									int a, b;{"\n"}a = 5;{"\n"}b = a + 2 // b становится равно
									5+2=7;{"\n"}a = (a + 2)*(b – 3) // a=28;{"\n"}b = b + 1 // b =
									7+1=8;
								</code>
							</pre>
							<h3>Вывод переменных (заметка)</h3>
							При выводе мы можем выводить вместе текст и числа:
							<code className="language-cpp">
								{'cout << a << "+" << b << "=" << c;'}
							</code>
							<h2>cin.get()</h2>
							<code>cin.get();</code> - ожидание ввода символа (было в уроке 1)
							<h2>Вывод с заданной длинной</h2>
							<pre>
								<code className="language-cpp">
									{"#include <iomanip>\n...\na = 123;\ncout << setw(5) << a;"}
								</code>
							</pre>
							<code className="language-cpp">{"#include <iomanip>"}</code> -
							манипуляторы для управления потоками
							<code className="language-cpp">setw(5)</code> - set width –
							установить ширину поля (выводит a, с шириной строки 5 - выведет:
							<pre>
								<code>{"    "}5</code>
							</pre>
							(4 отступа в начале, получается ширина строки 5))
							<h1>Вычисления (2 часть пары)</h1>
							<h6>
								Я уже устал печатать, зачем так много, файл уже 140 строчек, за
								что мне это?
							</h6>
							<h2>Типы данных</h2>
							<ol>
								<li>int // целое </li>
								<li>long int // длинное целое </li>
								<li>float // вещественное</li>
								<li>double // веществ. двойной точности</li>
								<li>bool // логические значения</li>
								<li>char // символ</li>
							</ol>
							<h3>Изменить тип данных значения</h3>
							<code>название_типа_данных(переменная)</code>
							Например:
							<pre>
								<code className="language-cpp">
									{
										"int a = 5;\nfloat(a); // число a становится с плавающей точкой: 5.0"
									}
								</code>
							</pre>
							<h2>Арифметическое выражения</h2>
							<code> a = (c + b*5*3 - 1) / 2 * d;</code>
							Приоритет (старшинство):
							<ul>
								<li>скобки</li>
								<li>умножение и деление</li>
								<li>сложение и вычитание</li>
							</ul>
							<h2>Деление</h2>
							Результат деления целого на целое – целое число (остаток
							отбрасывается):
							<h2>Сокращенная запись операций</h2>
							<pre>
								<code className="language-cpp">
									{
										"int a, b;\n...\na ++; // a = a + 1;\na --; // a = a – 1;\na += b; // a = a + b;\na -= b; // a = a - b;\na *= b; // a = a * b;\na /= b; // a = a / b;\na %= b; // a = a % b;"
									}
								</code>
							</pre>
							Это короче сокращения... То что комментарий это то, что она значит
							<h2>Вещественные числа</h2>
							Целая и дробная части числа разделяются точкой!
							<pre>
								<code className="language-cpp">
									{
										"float x = 123.456;\ncout.width(10);\ncout.precision(5);\ncout << x << endl;"
									}
								</code>
							</pre>
							Выведет 5 значащих цифр
							<pre>
								<code>{"    "}123.46</code>
							</pre>
							<hr />
							<pre>
								<code className="language-cpp">
									{"cout.width(10);\ncout.precision(2);\ncout << x << endl;\n"}
								</code>
							</pre>
							Выведет 5 значащих цифр
							<pre>
								<code>{"   "}1.2e+002</code>
							</pre>
							<h2>Задача «Объем конуса»</h2>
							<pre>
								<code className="language-cpp">
									{`#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;
float a,b;
int main()
{    
      cin>>a>>b;   
      cout<<fixed<<setprecision(3)<<M_PI*a*a*b/3;
}
`}
								</code>
							</pre>
							<h2>Функции cmath</h2>
							<ul>
								<li>abs(x) — модуль целого числа</li>
								<li>fabs(x) — модуль вещественного числа</li>
								<li>sqrt(x) — квадратный корень</li>
								<li>sin(x) — синус угла, заданного в радианах</li>
								<li>cos(x) — косинус угла, заданного в радианах</li>
								<li>exp(x) — экспонента ех</li>
								<li>ln(x) — натуральный логарифм</li>
								<li>pow(x,y) — xy: возведение числа x в степень y</li>
								<li>floor(x) — округление «вниз»</li>
								<li>ceil(x) — округление «вверх»</li>
							</ul>
							<h2 id="ссылки">Ссылки</h2>
							<ul>
								<li>
									<a href="https://lyceum.nstu.ru/sdo/mod/resource/view.php?id=14674">
										C++ 2 урок презентация
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Lesson1;
