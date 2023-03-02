import type { PageData } from "lume/core.ts";

export const title = "лёшапомоги.рф - главная";
export const description = "лёшапомоги.рф - главная";
export const layout = "layouts/index.tsx";

interface Data extends PageData {
	title: string;
	description: string;
	layout: string;
}

export default (data: Data) => {
	const posts = data.search.pages("type=programming");

	return (
		<>
			<h1>{data.title}</h1>

			<h2>Программирование</h2>

			<ul>
				{posts
					.sort((a, b) => {
						const titleA = a.data.title.toUpperCase();
						const titleB = b.data.title.toUpperCase();

						if (titleA < titleB) {
							return -1;
						}
						if (titleA > titleB) {
							return 1;
						}

						return 0;
					})
					.map((post) => (
						<li>
							<a href={post.data.url}>{post.data.title}</a>
						</li>
					))}
			</ul>
		</>
	);
};
