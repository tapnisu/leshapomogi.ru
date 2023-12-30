import { Head } from "$fresh/runtime.ts";
import { Button } from "@components/Button.tsx";

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

          <a href="/" class="cursor-pointer">
            <Button>Вернуться на главную</Button>
          </a>
        </div>
      </main>
    </>
  );
}
