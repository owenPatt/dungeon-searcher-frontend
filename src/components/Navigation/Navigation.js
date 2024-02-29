import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to="/">
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to="/encounter">
        Encounter
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
