import { Carousel } from "antd";
import "./Post.scss";
import { getComments } from "../../features/comments/commentsSlice";
import Comments from "../Comments/Comments";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../features/posts/postsSlice";

const Post = (params) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
 const isLiked= params.likes.includes(user._id)
  const handleLikeClick = () => {

    dispatch(like(params.postId));
  };

  const postImg = params.images.map((img) => {
    return (
      <div className="img-container" key={crypto.randomUUID()}>
        <img src={`http://localhost:8080/uploads/${img}`} alt="" />
      </div>
    );
  });

  return (
    <>
      <article className="post" key={params.postId}>
        <section className="post-main">
          <div className="post-user-details">
            <div className="img-container profile-pic-post">
              <img
                src={`http://localhost:8080/uploads/${params.avatar}`}
                alt=""
              />
            </div>
            <div>
              <p className="semi-bold">{params.username}</p>
              <p>{params.category}</p>
            </div>
          </div>
          <Carousel >{postImg}</Carousel>
        </section>
        <section className="post-details">
          <div className="post-like-menu">
            <div>
              <span
                className={`material-symbols-outlined ${
                  isLiked ? "material-symbols-filled" : ""
                }`}
                onClick={handleLikeClick}
              >
                {isLiked ? "favorite" : "favorite_border"}
              </span>
              <span className="material-symbols-outlined">add_comment</span>
            </div>
            <span className="material-symbols-outlined">bookmark</span>
          </div>
          <div>
            <span className="semi-bold">{params.title} </span>
            <span>{params.content}</span>
            <p onClick={() => dispatch(getComments(params.postId))}>
              View all comments
            </p>
            <Comments postId={params.postId} />
          </div>
        </section>
      </article>
    </>
  );
};

export default Post;
