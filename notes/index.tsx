import type { PageData } from "lume/core.ts";

export const title = "Записки / лёшапомоги.рф";
export const description = "Пользуйтесь. Или нет";
export const layout = "layouts/base.tsx";

export default function postsPage(data: PageData) {
  const postsProgramming = data.search.pages("type=cpp").sort((a, b) => {
    const titleA = a.data.title.toUpperCase();
    const titleB = b.data.title.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }

    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <h1>{data.title}</h1>

      <h3>C++</h3>

      <ul>
        {postsProgramming.map((post) => (
          <li>
            <a href={post.data.url}>{post.data.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}