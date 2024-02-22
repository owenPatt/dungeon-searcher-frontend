import { NavLink } from "react-router-dom";
import "./Nav.css";

/* <nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav> */

const Nav = () => {
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

export default Nav;
