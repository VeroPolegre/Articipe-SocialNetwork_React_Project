import React, { useState } from "react";
import "./Comment.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  likeComment,
  unlikeComment,
} from "../../features/comments/commentsSlice";

const Comment = ({ comment, onDelete, onUnlike }) => {
  const { user } = useSelector((state) => state.auth);
  const isLiked = comment.likes.includes(user._id);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(comment._id));
  };

  const handleLike = () => {
    if (!isLiked) {
      dispatch(likeComment(comment._id));
    } else {
      dispatch(unlikeComment(comment._id));
    }
  };

  return (
    <div>
      <p>{comment.text || "No text available"}</p>
      {comment.image && <img src={comment.image} alt="comment" />}
      <div className="post-like-menu-comments">
        <div>
          <span
            className={`material-symbols-outlined ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
          >
            favorite
          </span>
          <span className="material-symbols-outlined" onClick={handleDelete}>
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
