import React, { useEffect } from 'react';
import Header from '../../components/Header/header';
import PostGrid from '../../components/PostGrid/PostGrid';
import UserDataProfile from '../../components/UserDataProfile/UserDataProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser } from '../../features/user/userSlice';

const Profile = () => {

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedUser());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header/>
            <UserDataProfile user={user.loggedUser} posts={user.numOfPosts} following={user.numOfFollowing} followers={user.numOfFollowers}/>
            <PostGrid/>
        </React.Fragment>
    );
};

export default Profile;