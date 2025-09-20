// deno-lint-ignore-file react-no-danger

import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm";
import { postsHashset, Post } from "@utils/posts.ts";

// Syntax highlighting
import "https://esm.sh/prismjs@1.29.0/components/prism-bash?no-dts";
import "https://esm.sh/prismjs@1.29.0/components/prism-python?no-dts";
import "https://esm.sh/prismjs@1.29.0/components/prism-c?no-dts"; // prism-cpp requires prism-c to be loaded
import "https://esm.sh/prismjs@1.29.0/components/prism-cpp?no-dts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = postsHashset.get(ctx.params.slug)!;
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <title>{post.title} - Лёшапомоги</title>
        <meta name="description" content={post.description} />
        <meta name="og:description" content={post.description} />
      </Head>

      <a href="/" class="text-xl underline-offset-4 hover:underline">
        ← Вернуться на главную
      </a>

      <main class="bg-white dark:bg-[#0d1117] p-4 rounded-lg mt-8">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <time class="text-gray-300">
          {new Date(post.publishedAt).toLocaleDateString("ru-ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          class="mt-8 markdown-body"
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
    </>
  );
}
