import "../../styles/globals.css";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-white dark:text-white dark:bg-neutral-900 md:bg-neutral-100 md:dark:bg-black min-h-screen">
			<div className="md:flex md:flex-col md:flex-wrap md:content-center md:justify-center md:items-center">
				<div className="md:p-6 mt-16 m-4 md:rounded-3xl md:bg-white md:dark:bg-neutral-900 prose dark:prose-invert">
					{children}
				</div>
			</div>
		</div>
	);
}
