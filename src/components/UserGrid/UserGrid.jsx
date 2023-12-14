import { List, Avatar } from "antd";
import "./UserGrid.scss";

const UserGrid = ({ users }) => {
	console.log("users:", users);
	if (!users || users.length === 0) {
		return <div>No users found</div>;
	} else {
		return (
			<List
				itemLayout="horizontal"
				dataSource={users}
				renderItem={(user) => (
					<List.Item>
						<List.Item.Meta
							avatar={
								<Avatar
									shape="square"
									size={64}
									src={`http://localhost:8080/uploads/${user.avatar}`}
								/>
							}
							title={user.username}
						/>
					</List.Item>
				)}
			/>
		);
	}
};

export default UserGrid;
