import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "../styles/globals.css";

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

			<body className="bg-neutral-300 text-black dark:bg-black dark:text-white">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
