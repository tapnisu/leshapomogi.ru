import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col content-center justify-between">
			<header>
				<title>Лёшапомоги</title>
			</header>

			<div className="min-h-screen">
				<div className="w-full h-72 flex flex-col flex-wrap content-center justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900">
					<h1 className="text-3xl">Лёшапомоги</h1>
				</div>

				<div className="w-full flex flex-col content-center items-center p-8">
					<ul className="list-disc">
						<li>
							<h1 className="text-xl">Программирование</h1>
							<ol className="list-decimal">
								<li>
									<Link href="/lessons/programming/lesson1" className="underline">
										Урок 1
									</Link>
								</li>
								<li>
									<Link href="/lessons/programming/lesson2" className="underline">
										Урок 2
									</Link>
								</li>
								<li>
									<Link href="/lessons/programming/lesson3" className="underline">
										Урок 3
									</Link>
								</li>
							</ol>
						</li>
						<li>
							<h1 className="text-xl">Лёшепомогите</h1>
							<Link href="https://www.donationalerts.com/r/tapnisu">Donationalerts</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
