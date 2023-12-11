import "./UserDataProfile.scss";

const UserDataProfile = () => {
    return (
        <section className="user-data-main">
            <article className="profile-metrics">
                <div className="img-container">
                    <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="" />
                </div>
                <ul>
                    <li>
                        <h5>38</h5>
                        <p>posts</p>
                    </li>
                    <li>
                        <h5>379</h5>
                        <p>followers</p>
                    </li>
                    <li>
                        <h5>287</h5>
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