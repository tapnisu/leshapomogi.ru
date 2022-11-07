import "../../styles/globals.css";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<meta name="description" content="ЛЁША ПОМОГИ!" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>

			<body className="bg-white dark:text-white dark:bg-neutral-900 md:bg-neutral-100 md:dark:bg-black min-h-screen md:flex md:flex-col md:flex-wrap md:content-center md:justify-center md:items-center">
				<div className="md:p-8 md:rounded-3xl md:bg-white md:dark:bg-neutral-900 prose dark:prose-invert">
					{children}
				</div>
			</body>
		</html>
	);
}
