import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Head>
        <title>Лёшапомоги</title>
        <meta name="description" content="ЛЁША ПОМОГИ!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-between">
        <div className="w-full h-48 flex flex-col flex-wrap content-center justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900">
          <h1 className="text-3xl">Лёшапомоги</h1>
        </div>

        <div className="w-full flex flex-col content-center justify-center items-center">
          <ul className="list-disc">
            <li>
              <h1 className="text-xl">Программирование</h1>
              <ol className="list-decimal">
                <li>
                  <a href="/programming/lesson1" className="underline">
                    Урок 1
                  </a>
                </li>
                <li>
                  <a href="/programming/task1" className="underline">
                    Задание 1
                  </a>
                </li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h1>Лёша помоги</h1>
        </div>
      </main>
    </div>
  );
};

export default Index;
