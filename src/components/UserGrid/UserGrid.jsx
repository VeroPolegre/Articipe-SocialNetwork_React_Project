import React from "react";
import { useSelector } from "react-redux";
import "./UserGrid.scss";

const UserGrid = (users) => {
	// const searchedUsers = useSelector((state) => state.user.searchedUsers);

	return (
		<div className="user-grid">
			{users.map((user) => (
				<div className="user-container" key={user.id}>
					<img src={user.avatar} alt={`${user.username}'s avatar`} />
					<p>{user.username}</p>
				</div>
			))}
		</div>
	);
};

export default UserGrid;
