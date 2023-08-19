interface NavbarProps {
  path: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav aria-label="breadcrumb">
      <ul>
        <li>
          <a href="#">лёшапомоги</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>Page</li>
      </ul>
    </nav>
  );
}
