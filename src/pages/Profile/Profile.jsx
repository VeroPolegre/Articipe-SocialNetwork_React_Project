import React from 'react';
import Header from '../../components/Header/header';
import PostGrid from '../../components/PostGrid/PostGrid';
import UserDataProfile from '../../components/UserDataProfile/UserDataProfile';

const Profile = () => {
    return (
        <React.Fragment>
            <Header/>
            <UserDataProfile/>
            <PostGrid/>
        </React.Fragment>
    );
};

export default Profile;