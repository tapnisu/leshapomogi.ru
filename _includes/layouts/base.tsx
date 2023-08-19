import type { PageData } from "lume/core.ts";

export default function baseLayout(page: PageData) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{page.title}</title>
        <meta name="description" content={page.description}></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/nord.min.css"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body class="container">
        <article>{page.children}</article>
      </body>
    </html>
  );
}
