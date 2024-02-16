import { Link } from "react-router-dom";
import "./Nav.css";

/* <nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav> */

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__link" href="./">
        Search
      </a>
      <a className="nav__link" href="./">
        Encounter
      </a>
      <a className="nav__link" href="./">
        About
      </a>
    </nav>
  );
};

export default Nav;
