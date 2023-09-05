import type { PageData } from "lume/core.ts";

interface Path {
  title: string;
  href: string;
}

export default function baseLayout(page: PageData) {
  const path = page.page.src.path
    .split("/")
    .filter((e) => e != "")
    .reverse();
  const paths: Path[] = [];

  const pathTemp = page.page.src.path.split("/");

  path.forEach((p) => {
    if (p == "index") return;

    const href = pathTemp.join("/");

    pathTemp.pop();

    paths.push({
      title: p,
      href,
    });
  });

  paths.reverse();

  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{page.title}</title>
        <meta name="og:title" content={page.title} />
        <meta name="apple-mobile-web-app-title" content={page.title} />
        <meta name="description" content={page.description} />
        <meta name="og:description" content={page.description} />
        <meta name="theme-color" content="#1095c1" />
        <meta name="og:image" content="https://лёшапомоги.рф/og.png" />
        <meta name="og:url" content="https://лёшапомоги.рф/" />
        <meta name="twitter:image" content="https://лёшапомоги.рф/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/github-dark.min.css"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body class="container">
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href="/">лёшапомоги</a>
            </li>
            {paths.map((path) => (
              <li>
                <a href={path.href}>{path.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <article>{page.children}</article>

        <article>
          <p>Написать Лёше</p>

          <ul>
            <li>
              <a href="https://t.me/tapnisu">Telegram</a>
            </li>
            <li>
              <a href="mailto:0xalekseirybin@gmail.com">Почта</a>
            </li>
          </ul>
        </article>
      </body>
    </html>
  );
}
