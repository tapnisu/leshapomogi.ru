import type { PageData } from "lume/core.ts";

export default ({ title, children }: PageData) => (
	<html>
		<head>
			<title>{title}</title>
			<link rel="stylesheet" href="/styles/globals.css" />
		</head>
		<body>
			<div>{children}</div>
		</body>
	</html>
);
