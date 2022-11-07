import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="fixed backdrop-blur-sm bg-neutral-800/30 text-white w-full">
				<ul>
					<li className="inline-block m-4">
						<Link href="/" className="m-4">
							Главная
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
