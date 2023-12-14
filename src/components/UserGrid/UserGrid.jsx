import { List, Avatar, Button } from "antd";
import "./UserGrid.scss";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../features/user/userSlice";

const UserGrid = ({ users }) => {
	const dispatch = useDispatch();
	const followingUser = useSelector((state) => state.user.user.following);

	const isFollowing = (userId) => {
		return followingUser.some((user) => user._id === userId);
	};

	const handleFollow = async (userId) => {
		try {
			await dispatch(follow(userId));
		} catch (error) {
			console.error(error);
		}
	};

	const handleUnfollow = async (userId) => {
		try {
			await dispatch(unfollow(userId));
		} catch (error) {
			console.error(error);
		}
	};

	if (!users || users.length === 0) {
		return <h4 className="no-posts">No users found</h4>;
	} else {
		return (
			<div className="user-grid">
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
						{isFollowing(user._id) ? (
							<Button onClick={() => handleUnfollow(user._id)}>Unfollow</Button>
						) : (
							<Button onClick={() => handleFollow(user._id)}>Follow</Button>
						)}
					</List.Item>
				)}
			/>
			</div>
		);
	}
};

export default UserGrid;
