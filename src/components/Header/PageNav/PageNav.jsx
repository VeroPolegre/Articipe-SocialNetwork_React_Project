import { useLocation } from "react-router-dom";
import "./PageNav.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PageNav = () => {
	const location = useLocation();
	const [showHomeMenu, setShowHomeMenu] = useState(false);
	const [showUserMenu, setShowUserMenu] = useState(false);

	useEffect(() => {
		setShowHomeMenu(location.pathname === "/");
		setShowUserMenu(location.pathname === "/profile");
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
					<h4>Username</h4>
				</section>
				<section>
					<span className="material-symbols-outlined">menu</span>
				</section>
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
