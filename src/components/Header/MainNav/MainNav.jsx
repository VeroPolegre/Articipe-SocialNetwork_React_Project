import { Link } from "react-router-dom";
import "./MainNav.scss";

const MainNav = () => {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <Link to="/">
            <li className="material-symbols-outlined">home</li>
          </Link>
          <Link to="/explore">
            <li className="material-symbols-outlined">search</li>
          </Link>
          <Link to="/create">
            <li className="material-symbols-outlined">add_box</li>
          </Link>
          <Link to="/inbox">
            <li className="material-symbols-outlined">inbox</li>
          </Link>
          <Link to="/profile">
            <li className="material-symbols-outlined">account_circle</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
