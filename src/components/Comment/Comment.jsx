import "./Comment.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  likeComment,
  reset,
  unlikeComment,
} from "../../features/comments/commentsSlice";

const Comment = ({ comment }) => {
  const { user } = useSelector((state) => state.auth);
  const isLiked = comment.likes.includes(user._id);
  const dispatch = useDispatch();
  const isCommentOwner = comment.userId._id == user._id;
  const handleDelete = () => {
    dispatch(deleteComment(comment._id));
    setTimeout(() => {
      dispatch(reset());
    }, 2000);
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
      <span className="comment-username">{comment.userId.username}</span>:{" "}
      <span className="comment-text">
        {comment.text || "No text available"}
      </span>
      {comment.image && <img src={comment.image} alt="comment" />}
      <div className="post-like-menu-comments">
        <div>
          <span
            className={`material-symbols-outlined ${
              isLiked ? "material-symbols-filled" : ""
            }`}
            onClick={handleLike}
          >
            favorite
          </span>
          <span className="like-count">{comment.likes.length}</span>
          {isCommentOwner && (
            <span className="material-symbols-outlined" onClick={handleDelete}>
              delete
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
