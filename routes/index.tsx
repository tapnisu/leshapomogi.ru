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
    <main>
      <h1 class="text-5xl font-bold">Лёшапомоги!!!</h1>
      <div class="mt-8">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div className="bg-gray-100 text-black dark:bg-gray-950 p-4 m-4 rounded-lg border-2">
      <a href={`/${post.slug}`}>
        <h3 class="text-black dark:text-white font-bold">{post.title}</h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("ru-ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="text-black dark:text-white">{post.description}</div>
      </a>
    </div>
  );
}
