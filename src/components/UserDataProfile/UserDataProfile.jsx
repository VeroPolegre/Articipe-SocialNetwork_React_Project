import { useDispatch, useSelector } from "react-redux";
import "./UserDataProfile.scss";
import { getLoggedUser } from "../../features/user/userSlice";
import { useEffect } from "react";

const UserDataProfile = (userData) => {

const avatarImg = userData.user.avatar;

    return (
        <section className="user-data-main">
            <article className="profile-metrics">
                <div className="img-container">
                    <img src={`http://localhost:8080/uploads/${avatarImg}`} alt="" />
                </div>
                <ul>
                    <li>
                        <h5>{userData.posts}</h5>
                        <p>posts</p>
                    </li>
                    <li>
                        <h5>{userData.followers}</h5>
                        <p>followers</p>
                    </li>
                    <li>
                        <h5>{userData.following}</h5>
                        <p>following</p>
                    </li>
                </ul>
            </article>
            <article className="profile-buttons">
                <button className="button-1">follow</button>
                <button className="button-2">contact</button>
                <button className="material-symbols-outlined button-3">volunteer_activism</button>
            </article>
            <article className="user-posts-nav">
                <span className="material-symbols-outlined active">browse</span>
                <span className="material-symbols-outlined inactive">palette</span>
                <span className="material-symbols-outlined inactive">person_pin</span>
            </article>
        </section>
    );
};

export default UserDataProfile;