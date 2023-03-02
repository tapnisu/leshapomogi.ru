import type { PageData } from "lume/core.ts";

export default (page: PageData) => {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{page.title}</title>
        <meta name="description" content={page.description}></meta>
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div class="bg-card">
          <div class="card">
            <div className="card-content">{page.children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};
