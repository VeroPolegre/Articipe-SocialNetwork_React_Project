import React, { useEffect } from "react";
import Header from "../../components/Header/header";
import PostGrid from "../../components/PostGrid/PostGrid";
import UserDataProfile from "../../components/UserDataProfile/UserDataProfile";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../features/user/userSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return "cargandol....";
  }
  const loggedUserPosts = user.loggedUser?.postIds;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <UserDataProfile
        user={user}
        posts={user.numOfPosts}
        following={user.numOfFollowing}
        followers={user.numOfFollowers}
      />
      <PostGrid posts={loggedUserPosts} />
    </React.Fragment>
  );
};

export default Profile;
