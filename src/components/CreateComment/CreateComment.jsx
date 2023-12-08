import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../features/comments/commentsSlice";

const CreateComment = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleCreateComment = async () => {
    try {
      await dispatch(createComment({ postId, text, image }));
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleCreateComment}>Comment</button>
    </div>
  );
};

export default CreateComment;
