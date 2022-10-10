import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";

import deadInsideCpp from "@public/lesson1/1000-7.png";
import createNewProject from "@public/lesson1/create-new-project.png";
import langSelect from "@public/lesson1/lang-select.png";
import readyEditor from "@public/lesson1/ready-editor.png";
import saveProject from "@public/lesson1/save-project.png";
import selectConsoleApplication from "@public/lesson1/select-console-application.png";

const Lesson1: NextPage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Head>
        <title>Задание 2 - Лёшапомоги</title>
        <meta name="description" content="ЛЁША ПОМОГИ!"/>
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>

      <main className="bg-white dark:bg-black md:bg-neutral-50 md:dark:bg-neutral-900">
        <div className="p-4 md:fixed">
          <a href="/" className="text-xl">
            🠔 Назад
          </a>
        </div>

        <div
          className="min-h-screen md:flex md:flex-column md:flex-wrap md:content-center md:justify-center md:items-center p-4">
          <div className="md:p-8 md:rounded-3xl md:bg-white md:dark:bg-black">
            <div className="prose dark:prose-invert">
              <h1 id="урок-1">Задание 2</h1>
              <h2>Задания</h2>
              <h3>"В": Вывести на экран текст "лесенкой"</h3>
              <pre>
                Вася
                <br/>
                {"    "}пошёл
                <br/>
                {"         "}гулять
              </pre>

              <h3>"C": Вывести на экран рисунок из букв</h3>
              <pre>
                {"   "}Ж<br/>
                {"  "}ЖЖЖ
                <br/> ЖЖЖЖЖ
                <br/>
                ЖЖЖЖЖЖЖ
                <br/> HH HH
                <br/> ZZZZZ
              </pre>

              <h2>Решение</h2>

              <h3>Задание "В"</h3>

              <pre>
                <code className="language-cpp">
                  {`#include <iostream>

using namespace std;

int main(int argc, char** argv) {
  cout << "Vasya\\n	    poshel\\n   	       gulyat";

  return 0;
}
                `}
                </code>
              </pre>

              <h3>Задание "С"</h3>

              <pre>
                <code className="language-cpp">
                  {`#include <iostream>

using namespace std;

int main(int argc, char** argv) {
  cout << "   S\\n  SSS\\n SSSSS\\nSSSSSSS\\n HH HH\\n ZZZZZ";
  
	return 0;
}
`}
                </code>
              </pre>

              <h3 id="ссылки">Ссылки</h3>
              <ul>
                <li>
                  <a href="https://lyceum.nstu.ru/sdo/mod/assign/view.php?id=14543">
                    Задание 1
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
