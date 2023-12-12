import React, { useState } from "react";
import commentsService from "../../features/comments/commentsService";

const CreateComment = ({ postId }) => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("text")) {
      newErrors.text = "Comment cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateComment = async (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      try {
        await commentsService.createComment(postId, formData);
        setFormData({
          text: "",
        });
      } catch (error) {
        console.error("Error creating comment:", error);
      }
    }
  };

  return (
    <form onSubmit={handleCreateComment} className="form-comment">
      <div>
        <textarea
          name="text"
          value={formData.text}
          onChange={onChange}
          placeholder="Type your comment..."
        />
        {errors.text && <p>{errors.text}</p>}
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CreateComment;
