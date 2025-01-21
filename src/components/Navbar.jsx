import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/apropos" className="navbar-link">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
