import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import createNewProject from "@public/lesson1/create-new-project.png";
import langSelect from "@public/lesson1/lang-select.png";
import selectConsoleApplication from "@public/lesson1/select-console-application.png";
import saveProject from "@public/lesson1/save-project.png";
import readyEditor from "@public/lesson1/ready-editor.png";
import deadInsideCpp from "@public/lesson1/1000-7.png";


const Lesson1: NextPage = () => {
	return (
		<div className="bg-white text-black dark:bg-black dark:text-white">
			<Head>
				<title>Урок 1 - Лёшапомоги</title>
				<meta name="description" content="ЛЁША ПОМОГИ!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="w-full md:flex md:flex-column md:flex-wrap md:content-center md:justify-center md:items-center p-1">
				<div className="prose dark:prose-invert">
					<h1 id="урок-1">Урок 1</h1>
					<p>
						2 этапа создания программы:
						<br />
						Трансляция - перевод текста программы в машинный код
						<br />
						Компоновка - сборка частей программы и подключение стандартных
						функций <br /> Трансляторами называют компиляторы - они переводят
						код в машинный код.
					</p>
					<pre>
						<code className="language-cpp">
							{`#include <iostream>

using namespace std;

int main() {
  cout << "2+";
  cout << "2=?\\n";
  cout << "Ответ: 4";
  
  cin.get();

  return 0;
}`}
						</code>
					</pre>
					<h2 id="заметки">Заметки:</h2>
					<p>
						#include {"<iostream>"} - включаем в программу библиотеку для ввода.
					</p>
					<p>using namespace std; - использование стандартных функций c++.</p>
					<p>
						<code>int main()</code> - основная программа (основная функция).
					</p>
					<p>
						<code>cout</code> - console output, как print в питоне выводит
						текст. Текст для вывода нужно вводить через стрелочку.
					</p>
					<p>
						<code>endl</code> - новая строка.
					</p>
					<p>В конце каждой команды нужно ставить точку с запятой - ;.</p>
					<p>Файлы в C++ имеют расширение .cpp</p>
					<p>
						<code>return 0;</code> - завершаем программу.
					</p>
					<h2 id="комментарии-в-c">Комментарии в C++</h2>
					<p>
						В языке python мы могли использовать <code># текст</code> для
						комментариев, в C++ для этого используется <code>{"// текст"}</code>{" "}
						для комментария 1 строки, и <code>{"/* текст */"}</code> для
						нескольких строк
					</p>
					<pre>
						<code className="language-cpp">
							{
								"// Комментарий на 1 строку /* Комментарий на несколько строк */"
							}
						</code>
					</pre>
					<p>Текст в комментариях игнорируется компилятором.</p>
					<h2 id="как-мы-всё-это-дело-писали">Как мы всё это дело писали</h2>
					<p>
						На школьных компах была скачена программа DevC++, в ней мы и писали.
					</p>
					<p>
						Ссылка на скачивание есть в курсе (ИНФ9/основы программирования в
						С++/DevC++ с графикой) (ну или ссылка{" "}
						<a href="https://disk.yandex.ru/d/evBJpMZy3Up9zS">
							https://disk.yandex.ru/d/evBJpMZy3Up9zS
						</a>
						, но я бы лучше с СДО качал).
					</p>
					<p>
						Когда первый раз запускаешь программу во время первой настройки
						нужно выбрать обязательно английский язык - Евгения Сергеевна
						сказала что на русском называет файлы по русски и вообще C++ ввёл
						санкции на РФ (ладно санкции не вводил но работает плохо).
					</p>
					<p>
						<Image src={langSelect} alt="Выбор языка в DevC++" />
					</p>
					<p>
						Открывается пустой редактор, нажимаем file (файл), new (новый),
						Project... (Проект...)
					</p>
					<p>
						<Image src={createNewProject} alt="Скриншот создание проекта" />
					</p>
					<p>
						Выбираем тип проекта Console Application (Консольное приложение).
					</p>
					<p>
						<Image
							src={selectConsoleApplication}"
							alt="Скриншот выбор типа проекта"
						/>
					</p>
					<p>И сохраняем проект куда-нибудь.</p>
					<p>
						<Image
							src={saveProject}
							alt="Скриншот сохраняем файл"
						/>
					</p>
					<p>Теперь у нас есть текстовый редактор для C++.</p>
					<p>
						<Image
							src={readyEditor}
							alt="Скриншот готовый редактор"
						/>
					</p>
					<p>
						Нажимаем F9 для компиляции (если файл не сохранен его нужно будет
						сохранить), и F10 для запуска.
					</p>
					<p>
						<Image src={deadInsideCpp} alt="Скриншот 1000-7" />
					</p>
					<p>Теперь можно делать 1000-7 в C++ ура.</p>
					<h3 id="ссылки">Ссылки</h3>
					<ul>
						<li>
							<a href="https://lyceum.nstu.ru/sdo/mod/resource/view.php?id=14542">
								C++ 1 урок презентация
							</a>
						</li>
						<li>
							<a href="https://lyceum.nstu.ru/sdo/mod/url/view.php?id=1790">
								DevC++
							</a>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Lesson1;
