export default function Footer() {
  return (
    <footer class="py-4">
      <h2 class="text-xl font-bold">Написать Лёше</h2>
      <ul class="flex list-none">
        <li>
          <a
            href="https://t.me/tapnisu"
            class="underline hover:cursor-pointer hover:text-cyan-500 transition-colors"
          >
            Telegram
          </a>
        </li>
        <li>
          <pre>&nbsp;/&nbsp;</pre> {/* " / " */}
        </li>
        <li>
          <a
            href="mailto:aleksei@tapni.su"
            class="underline hover:cursor-pointer hover:text-cyan-500 transition-colors"
          >
            Почта
          </a>
        </li>
      </ul>
    </footer>
  );
}
