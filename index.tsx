import type { PageData } from "lume/core.ts";

export const title = "лёшапомоги.рф - главная";
export const layout = "layouts/main.tsx";

interface Data extends PageData {
	title: typeof title;
	layout: typeof layout;
}

export default (data: Data) => {
	const posts = data.search.pages("type=programming");

	return (
		<>
			<h1>{data.title}</h1>

			<h2>Программирование</h2>

			<ul>
				{posts.map((post) => (
					<li>
						<a href={post.data.url}>{post.data.title}</a>
					</li>
				))}
			</ul>
		</>
	);
};
