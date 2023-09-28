import type { PageData } from "lume/core.ts";

export const title = "лёшапомоги.рф";
export const description = "лёша помоги";
export const layout = "layouts/base.tsx";

export default function postsPage(data: PageData) {
  const cpp = data.search.pages("type=cpp").sort((a, b) => {
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

  const html = data.search.pages("type=html").sort((a, b) => {
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
        {cpp.map((post) => (
          <li>
            <a href={post.data.url}>{post.data.title}</a>
          </li>
        ))}
      </ul>

      <h3>HTML</h3>

      <ul>
        {html.map((post) => (
          <li>
            <a href={post.data.url}>{post.data.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
