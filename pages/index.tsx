import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
	return (
		<div className="bg-white dark:bg-black dark:text-white">
			<Head>
				<title>Лёшапомоги</title>
				<meta name="description" content="ЛЁША ПОМОГИ!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="w-full min-h-screen flex flex-column flex-wrap content-center justify-center items-center">
				<ol>
					<li>
						<a href="/lesson1" className="underline">
							Урок 1
						</a>
					</li>
				</ol>
			</main>
		</div>
	);
};

export default Index;
