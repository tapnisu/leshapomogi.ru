import type { PageData } from "lume/core.ts";

export default (page: PageData) => {
	return (
		<html>
			<head>
				<title>{page.title}</title>
				<link rel="stylesheet" href="/css/post.css" />
			</head>
			<body>
				<div>{page.children}</div>
			</body>
		</html>
	);
};
