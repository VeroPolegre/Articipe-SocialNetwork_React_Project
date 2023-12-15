import React, { useState } from "react";
import "./Post.scss";
import { Carousel } from "antd";
import { getComments } from "../../features/comments/commentsSlice";
import Comments from "../Comments/Comments";
import CreateComment from "../CreateComment/CreateComment";
import { useDispatch, useSelector } from "react-redux";
import { like, unlike } from "../../features/posts/postsSlice";
const API_URL = "https://socialnetwork-backend-project-dev-qxbk.4.us-1.fl0.io";

const Post = (params) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [showCreateComment, setShowCreateComment] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.comments);
  const isAlreadyLiked = params.likes.includes(user._id);

  const handleLikeClick = () => {
    if (isAlreadyLiked) {
      dispatch(unlike(params.postId));
    } else {
      dispatch(like(params.postId));
    }
  };

  const postImg = params.images.map((img) => {
    return (
      <div className="img-container" key={crypto.randomUUID()}>
        <img src={`${API_URL}/uploads/${img}`} alt="" />
      </div>
    );
  });

  const toggleComments = () => {
    setShowComments(!showComments);
    if (!showComments) {
      dispatch(getComments(params.postId));
    }
  };

  const toggleCreateComment = () => {
    setShowCreateComment(!showCreateComment);
  };

  return (
    <>
      <article className="post" key={params.postId}>
        <section className="post-main">
          <div className="post-user-details">
            <div className="img-container profile-pic-post">
              <img src={`${API_URL}/uploads/${params.avatar}`} alt="" />
            </div>
            <div>
              <p className="semi-bold">{params.username}</p>
              <p>{params.category}</p>
            </div>
          </div>
          <Carousel>{postImg}</Carousel>
        </section>
        <section className="post-details">
          <div className="post-like-menu">
            <div>
              <span
                className={`material-symbols-outlined ${
                  isAlreadyLiked ? "material-symbols-filled" : ""
                }`}
                onClick={handleLikeClick}
              >
                {isAlreadyLiked ? "favorite" : "favorite_border"}
              </span>
              <span
                className="material-symbols-outlined"
                onClick={toggleCreateComment}
              >
                add_comment
              </span>
            </div>
            <span className="material-symbols-outlined">bookmark</span>
          </div>
          <div>
            <span className="semi-bold">{params.title} </span>
            <span>{params.content}</span>
            <p onClick={toggleComments}>
              {showComments ? "Hide" : "View"} all comments
            </p>
            {showComments && <Comments postId={params.postId} />}
            <div className="notification">{message}</div>
          </div>
        </section>
      </article>

      {showCreateComment && (
        <CreateComment
          postId={params.postId}
          visible={showCreateComment}
          onCancel={toggleCreateComment}
        />
      )}
    </>
  );
};

export default Post;
