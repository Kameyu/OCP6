import "../../utils/styles/header.css";
import Logo from "../../assets/header_logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation().pathname;

	return (
		<header className="header">
			<Link to="/">
				<img src={Logo} alt="Logo Kasa" />
			</Link>
			<nav>
				<Link
					className={`link${
						location === '/' ? " underline" : ""
					}`}
					to="/"
				>
					Accueil
				</Link>
				<Link className={`link${
						location === '/apropos' ? " underline" : ""
					}`} to="apropos">
					A Propos
				</Link>
			</nav>
		</header>
	);
}

export default Header;
