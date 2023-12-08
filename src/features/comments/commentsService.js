import axios from "axios";

const API_URL = "http://localhost:8080/comments";

const createComment = async (postId, text, image) => {
  const formData = new FormData();
  formData.append("text", text);
  formData.append("image", image);

  const res = await axios.post(`${API_URL}/${postId}`, formData);
  return res.data;
};

const getComments = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const deleteComment = async (commentId) => {
  const res = await axios.delete(`${API_URL}/${commentId}`);
  return res.data;
};

const likeComment = async (commentId) => {
  const res = await axios.put(`${API_URL}/like/${commentId}`);
  return res.data;
};

const unlikeComment = async (commentId) => {
  const res = await axios.put(`${API_URL}/unlike/${commentId}`);
  return res.data;
};

const updateCommentLikes = async (commentId, userId) => {
  const res = await axios.put(`${API_URL}/updateLikes/${commentId}`, {
    userId,
  });
  return res.data;
};

const commentsService = {
  createComment,
  getComments,
  deleteComment,
  likeComment,
  unlikeComment,
  updateCommentLikes,
};

export default commentsService;
