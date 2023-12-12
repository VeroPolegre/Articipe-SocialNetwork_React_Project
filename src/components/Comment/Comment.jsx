import React, { useState } from "react";

const Comment = ({ comment, onDelete, onLike, onUnlike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleDelete = () => {
    onDelete(comment._id);
  };

  const handleLike = () => {
    if (!isLiked) {
      onLike(comment._id);
    } else {
      onUnlike(comment._id);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p>{comment.text || "No text available"}</p>
      {comment.image && <img src={comment.image} alt="comment" />}
      <div className="post-like-menu">
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
