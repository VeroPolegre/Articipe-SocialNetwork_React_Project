import React, { useState } from "react";
import { useDispatch } from "react-redux";
import commentsService from "../../features/comments/commentsService";
import {
  deleteComment,
  updateCommentLikes,
} from "../../features/comments/commentsSlice";

const CommentComponent = ({ comment }) => {
  const [isUpdatingLikes, setIsUpdatingLikes] = useState(false);
  const dispatch = useDispatch();

  const commentText = comment.text || "No text available";

  const handleDelete = async () => {
    await commentsService.deleteComment(comment._id);
    dispatch(deleteComment(comment._id));
  };

  const handleLike = async () => {
    if (isUpdatingLikes) return;

    try {
      setIsUpdatingLikes(true);
      await commentsService.likeComment(comment._id);
      dispatch(
        updateCommentLikes({ commentId: comment._id, userId: comment.userId })
      );
    } finally {
      setIsUpdatingLikes(false);
    }
  };

  const handleUnlike = async () => {
    if (isUpdatingLikes) return;

    try {
      setIsUpdatingLikes(true);
      await commentsService.unlikeComment(comment._id);
      dispatch(
        updateCommentLikes({ commentId: comment._id, userId: comment.userId })
      );
    } finally {
      setIsUpdatingLikes(false);
    }
  };

  return (
    <div>
      <p>{commentText}</p>
      {comment.image && <img src={comment.image} alt="comment" />}
      <p>Likes: {comment.likes.length}</p>
      <button onClick={handleLike} disabled={isUpdatingLikes}>
        Like
      </button>
      <button onClick={handleUnlike} disabled={isUpdatingLikes}>
        Unlike
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CommentComponent;
