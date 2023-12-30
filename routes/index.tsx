import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post, getPosts } from "@utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <>
      <Head>
        <title>Лёшапомоги</title>
        <meta name="description" content="Всякие записи от Лёши" />
        <meta name="og:description" content="Всякие записи от Лёши" />
      </Head>

      <main class="p-4">
        <h1 class="text-5xl font-bold">Лёшапомоги!!!</h1>
        <div class="mt-8">
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;

  return (
    <a href={`/${post.slug}`}>
      <div className="bg-white text-black hover:bg-gray-200 dark:bg-[#0d1117] dark:hover:bg-gray-600 transition-colors p-4 my-4 rounded-lg">
        <h3 class="text-black dark:text-white font-bold">{post.title}</h3>
        <time class="text-gray-300">
          {new Date(post.publishedAt).toLocaleDateString("ru-ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="text-black dark:text-white">{post.description}</div>
      </div>
    </a>
  );
}
