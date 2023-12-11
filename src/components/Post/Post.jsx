import commentsService from "../../features/comments/commentsService";
import "./Post.scss";
import React, { useState, useEffect } from "react";

const profileImg =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

const Post = (params) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postId = params._id;
        const fetchedComments = await commentsService.getComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [params._id]);
  return (
    <>
      <article className="post" key={params._id}>
        <section className="post-main">
          <div className="post-user-details">
            <div className="img-container profile-pic-post">
              <img src={profileImg} alt="" />
            </div>
            <div>
              <p className="semi-bold">{params.username}</p>
              <p>{params.category}</p>
            </div>
          </div>
          <div className="img-container">
            <img
              src={`http://localhost:8080/uploads/${params.images}`}
              alt=""
            />
          </div>
        </section>
        <section className="post-details">
          <div className="post-like-menu">
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span className="material-symbols-outlined">add_comment</span>
            </div>
            <span className="material-symbols-outlined">bookmark</span>
          </div>
          <div>
            <span className="semi-bold">{params.title} </span>
            <span>{params.content}</span>
            {comments.length > 0 && (
              <div>
                <p>View all comments</p>
                <ul>
                  {comments.map((comment) => (
                    <li key={comment._id}>{comment.text}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Post;
