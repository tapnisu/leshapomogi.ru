const Navbar = () => (
	<nav>
		<ul>
			{[{ name: "Главная", url: "/" }]?.map(
				(info: { name: string; url: string }) => (
					<li key={info.name}>
						<a href={info.url}>{info.name}</a>
					</li>
				)
			)}
		</ul>
	</nav>
);

export default Navbar;
