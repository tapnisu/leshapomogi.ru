import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full bg-gradient-to-b from-transparent to-red-100 dark:to-neutral-900 flex flex-col items-center p-8">
			<div className="mx-auto w-24 h-1 my-12 bg-black dark:bg-white rounded-full"></div>
			<h2 className="text-xl">Написать Лёшепомоги</h2>
			<ul className="list-disc p-4">
				<li>
					<Link href="https://github.com/tapnisu">Github</Link>
				</li>
				<li>
					<Link href="https://discord.com/users/586128640136445964">
						Discord
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/tapnisu">Twitter</Link>
				</li>
				<li>
					<Link href="https://t.me/tapnisu">Telegram 1</Link>
				</li>
				<li>
					<Link href="https://t.me/alexiyrybin">Telegram 2</Link>
				</li>
				<li>
					<Link href="https://vk.com/tapnisu">VK 1</Link>
				</li>
				<li>
					<Link href="https://vk.com/rybinaalina">VK 2</Link>
				</li>
				<li>
					<Link href="mailto:alexiy.rybin@gmail.com">Почта</Link>
				</li>
			</ul>
			<h3 className="p-4">Копирайт © 2022 Лёшапомоги</h3>
		</footer>
	);
};

export default Footer;
