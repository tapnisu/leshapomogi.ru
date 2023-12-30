import { Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import Footer from "@components/Footer.tsx";
import Navbar from "@components/Navbar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="apple-mobile-web-app-title" content="Лёшапомоги" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="og:image" content="https://leshapomogi.ru/og.png" />
        <meta name="og:url" content="https://leshapomogi.ru/" />
        <meta name="twitter:image" content="https://leshapomogi.ru/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
      </Head>

      <body class="bg-gray-100 text-black dark:bg-gray-950 dark:text-white p-4 flex flex-col items-center">
        <div class="max-w-screen-md">
          <Navbar />
          <Component />
          <Footer />
        </div>
      </body>
    </html>
  );
}
