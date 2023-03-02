import type { PageData } from "lume/core.ts";

export default (page: PageData) => {
	return (
		<html lang="ru">
			<head>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{page.title}</title>
				<meta name="description" content={page.description}></meta>
				<link rel="stylesheet" href="/styles/post.css" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/github-dark.min.css"
				/>
			</head>
			<body>
				<div class="bg-card">
					<div class="card">
						<div class="card-content">
							<a href="/">Главная</a>
							{page.children}
						</div>
					</div>
				</div>
			</body>
		</html>
	);
};
