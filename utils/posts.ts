import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/posix/mod.ts";

const DIRECTORY = "./posts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  description: string;
  course: string;
  content: string;
}

// Get posts.
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }

  const posts = (await Promise.all(promises)) as Post[];

  return posts.sort((a, b) => {
    const courseComp = a.course.localeCompare(b.course);

    return courseComp != 0 ? courseComp : a.title.localeCompare(b.title);
  });
}

// Get post.
export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract(text);

  return {
    slug,
    title: attrs.title as string,
    publishedAt: new Date(attrs.published_at as string),
    content: body,
    description: attrs.description as string,
    course: (attrs.course as string) ?? "Другое",
  };
}
