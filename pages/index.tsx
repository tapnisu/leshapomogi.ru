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

			<main className="w-full min-h-screen flex flex-col flex-wrap content-center justify-center items-center">
				<h1 className="text-3xl">Лёшапомоги</h1>

				<ul className="list-disc">
					<li>
						<h1 className="text-xl">Программирование</h1>
						<ol className="list-decimal">
							<li>
								<a href="/programming/lesson1" className="underline">
									Урок 1
								</a>
							</li>
							<li>
								<a href="/programming/task1" className="underline">
									Задание 1
								</a>
							</li>
						</ol>
					</li>
				</ul>
			</main>
		</div>
	);
};

export default Index;
