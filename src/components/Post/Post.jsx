import "./Post.scss";
import React from "react";

const profileImg = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

const Post = (params) => {
    return (
        <>
        <article className="post" key={params._id}>
            <section className="post-main">
                <div className="post-user-details">
                    <div className="img-container profile-pic-post">
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <p className="semi-bold">{params.username}</p>
                        <p>Category</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={params.images} alt="" />
                </div>
            </section>
            <section className="post-details">
                <div className="post-like-menu">
                    <div>
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="material-symbols-outlined">add_comment</span>
                    </div>
                    <span className="material-symbols-outlined">bookmark</span>
                </div>
                <div>
                    <span className="semi-bold">{params.title} </span>
                    <span>{params.content}</span>
                    <p>View all comments</p>
                </div>
            </section>
        </article>
        </>
    )
};

export default Post;