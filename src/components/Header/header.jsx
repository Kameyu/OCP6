import "./header.css";
import Logo from "../../assets/header_logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation().pathname;

	return (
		<header className="header">
			<Link to="/">
				<img src={Logo} alt="Logo Kasa" />
			</Link>
			<nav>
				<NavLink
					className={`link${
						location === '/' ? " underline" : ""
					}`}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink className={`link${
						location === '/apropos' ? " underline" : ""
					}`} to="apropos">
					A Propos
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
