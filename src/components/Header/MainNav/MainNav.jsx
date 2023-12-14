import { Link, NavLink } from "react-router-dom";
import "./MainNav.scss";
import { useState } from "react";
import CreatePost from "../../CreatePost/CreatePost";

const MainNav = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<nav className="main-nav">
				<ul>
					<NavLink to="/" exact="true" onClick={() => window.scrollTo(0, 0)}>
						<li className="material-symbols-outlined">home</li>
					</NavLink>
					<Link to="/explore">
						<li className="material-symbols-outlined">search</li>
					</Link>
					<Link to="#" onClick={showModal}>
						<li className="material-symbols-outlined">add_box</li>
					</Link>
					<CreatePost visible={isModalVisible} onCancel={handleCancel} />
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
