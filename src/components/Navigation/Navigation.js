import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ baseUrl }) => {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to={`${baseUrl}/`}>
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to={`${baseUrl}/encounter`}>
        Encounter
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
        to={`${baseUrl}/about`}>
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
