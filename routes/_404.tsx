import { Button } from "@components/Button.tsx";

export default function Blog404Page() {
  return (
    <main>
      <div class="text-center flex flex-col items-center text-3xl">
        <p>404</p>
        <p>Не найдено</p>

        <a href="/" className="cursor-pointer">
          <Button>Вернуться на главную</Button>
        </a>
      </div>
    </main>
  );
}
