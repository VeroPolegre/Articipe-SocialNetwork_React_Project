import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../features/comments/commentsSlice";
import commentsService from "../../features/comments/commentsService";
import CreateComment from "../CreateComment/CreateComment";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await commentsService.getAllComments();
      dispatch(setComments(fetchedComments));
    };

    fetchComments();
  }, [dispatch, postId]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <CreateComment postId={postId} />
    </div>
  );
};

export default Comments;
