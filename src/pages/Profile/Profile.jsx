import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import PostGrid from "../../components/PostGrid/PostGrid";
import UserDataProfile from "../../components/UserDataProfile/UserDataProfile";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../features/user/userSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return "Loading...";
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  const numOfPosts = user.postIds?.length;
  const numOfFollowing = user.following?.length;
  const numOfFollowers = user.followers?.length;

  return (
    <React.Fragment>
      <Header />
      <UserDataProfile
        user={user}
        posts={numOfPosts}
        following={numOfFollowing}
        followers={numOfFollowers}
      />
      <PostGrid posts={user.postIds} />
    </React.Fragment>
  );
};

export default Profile;
