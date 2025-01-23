import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
