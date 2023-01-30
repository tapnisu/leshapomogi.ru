import type { PageData } from "lume/core.ts";

export default ({ title, children }: PageData) => (
	<html>
		<head>
			<title>{title}</title>
			<link rel="stylesheet" href="/styles/globals.css" />
		</head>
		<body>
			<div className="bg-black text-white min-h-screen">{children}</div>
		</body>
	</html>
);
