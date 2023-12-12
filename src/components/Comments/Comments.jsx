import React, { useEffect } from "react";
import commentsService from "../../features/comments/commentsService";
import Comment from "../Comment/Comment";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
  deleteComment,
  likeComment,
  unlikeComment,
} from "../../features/comments/commentsSlice";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.auth);

  const handleDeleteComment = async (commentId) => {
    try {
      await commentsService.deleteComment(commentId);
      dispatch(deleteComment(commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      await commentsService.likeComment(commentId);
      dispatch(likeComment({ commentId, userId: user._id }));
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  const handleUnlikeComment = async (commentId) => {
    try {
      await commentsService.unlikeComment(commentId);
      dispatch(unlikeComment({ commentId, userId: user._id }));
    } catch (error) {
      console.error("Error unliking comment:", error);
    }
  };

  const comment = comments.map((comment) => (
    <Comment
      key={comment._id}
      comment={comment}
      onDelete={comment.userId === user._id ? handleDeleteComment : null}
      onLike={handleLikeComment}
      onUnlike={handleUnlikeComment}
    />
  ));

  return <div>{comment}</div>;
};

export default Comments;
