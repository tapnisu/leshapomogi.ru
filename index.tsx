import type { PageData } from "lume/core.ts";

export const title = "Главная";
export const layout = "layouts/main.tsx";

interface Data extends PageData {
	title: typeof title;
	layout: typeof layout;
}

export default (data: Data) => (
	<>
		<h1>{data.title}</h1>
		<p>Лёшапомоги.рф</p>
	</>
);
