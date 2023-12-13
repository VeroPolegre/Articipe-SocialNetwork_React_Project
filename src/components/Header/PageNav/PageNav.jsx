import { useLocation } from "react-router-dom";
import "./PageNav.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PageNav = ({ user }) => {
  if (!user) {
    return "cargando..";
  }
  const location = useLocation();
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  useEffect(() => {
    setShowHomeMenu(location.pathname === "/");
    setShowUserMenu(location.pathname === "/profile");
    setShowExploreMenu(location.pathname === "/explore");
  }, [location]);

  if (showHomeMenu) {
    return (
      <header>
        <section>
          <h4>ARTICIPE</h4>
        </section>
        <section>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">menu</span>
        </section>
        <div>
          <span className="material-symbols-outlined right-border">
            explore
          </span>
          <span className="material-symbols-outlined">group</span>
        </div>
      </header>
    );
  } else if (showUserMenu) {
    return (
      <header>
        <section>
          <h4>{user.username}</h4>
        </section>
        <section>
          <span className="material-symbols-outlined">menu</span>
        </section>
      </header>
    );
  } else if (showExploreMenu) {
    return (
      <header>
        <section>
          <h4>ARTICIPE</h4>
        </section>
        <section>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">menu</span>
        </section>
        <div>
          <span className="material-symbols-outlined right-border">
            grid_on
          </span>
          <span className="material-symbols-outlined">person</span>
        </div>
      </header>
    );
  } else {
    return (
      <>
        <header>
          <section>
            <h4>ARTICIPE</h4>
          </section>
          <section>
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">menu</span>
          </section>
        </header>
      </>
    );
  }
};

export default PageNav;
