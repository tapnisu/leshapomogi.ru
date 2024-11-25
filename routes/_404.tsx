import { Head } from "$fresh/runtime.ts";

export default function Blog404Page() {
  return (
    <>
      <Head>
        <title>404 / Лёшапомоги</title>
        <meta name="description" content="Всякие записи от Лёши" />
        <meta name="og:description" content="Всякие записи от Лёши" />
      </Head>
      <main>
        <div class="text-center flex flex-col items-center text-3xl">
          <p>404</p>
          <p>Не найдено</p>

          <a
            href="/"
            class="w-fit py-4 px-8 m-2 rounded-full text-white dark:bg-cyan-500 hover:bg-cyan-700 transition-colorscursor-pointer"
          >
            Вернуться на главную
          </a>
        </div>
      </main>
    </>
  );
}
