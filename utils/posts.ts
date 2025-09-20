import { extract } from "@std/front-matter/yaml";
import { join } from "@std/path/posix";

const DIRECTORY = "./posts";

export interface Post {
  path: string;
  slug: string;
  title: string;
  publishedAt: Date;
  description: string;
  course: string;
  content: string;
  hidden: boolean;
}

// Get posts.
export async function getPosts(): Promise<Post[]> {
  const promises = [];

  for await (const courseDir of Deno.readDir(DIRECTORY)) {
    if (courseDir.isDirectory) {
      const coursePath = join(DIRECTORY, courseDir.name);

      for await (const file of Deno.readDir(coursePath)) {
        if (file.isFile && file.name.endsWith(".md")) {
          const path = join(courseDir.name, file.name.replace(/\.md$/, ""));
          promises.push(getPost(path));
        }
      }
    }
  }

  const posts = (await Promise.all(promises)) as Post[];

  return posts.sort((a, b) => {
    const aIsCyrillic = /[\u0400-\u04FF]/.test(a.course);
    const bIsCyrillic = /[\u0400-\u04FF]/.test(b.course);

    if (aIsCyrillic && !bIsCyrillic) return 1;
    if (!aIsCyrillic && bIsCyrillic) return -1;

    const courseComp = a.course.localeCompare(b.course);

    return courseComp != 0 ? courseComp : a.title.localeCompare(b.title);
  });
}

interface Attributes {
  title: string;
  slug: string;
  published_at: string;
  description: string;
  course?: string;
  hidden?: boolean;
}

// Get post.
export async function getPost(path: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${path}.md`));
  const { attrs, body } = extract<Attributes>(text);

  return {
    path,
    title: attrs.title,
    slug: attrs.slug,
    publishedAt: new Date(attrs.published_at),
    content: body,
    description: attrs.description,
    course: (attrs.course) ?? "Другое",
    hidden: (attrs.hidden) ?? false,
  };
}

export function getPostsHashset(posts: Post[]) {
  const map = new Map<string, Post>();
  for (const post of posts) {
    map.set(post.slug, post);
  }
  return map;
}

export const posts = await getPosts();
export const postsHashset = getPostsHashset(posts);
