import { Carousel } from "antd";
import "./Post.scss";
import React from "react";

const Post = (params) => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const postImg = params.images.map((img) => {
    return (
      <div className="img-container" key={crypto.randomUUID()}>
        <img src={`http://localhost:8080/uploads/${img}`} alt="" />
      </div>
    );
  });

  return (
    <>
      <article className="post" key={params._id}>
        <section className="post-main">
          <div className="post-user-details">
            <div className="img-container profile-pic-post">
              <img
                src={`http://localhost:8080/uploads/${params.avatar}`}
                alt=""
              />
            </div>
            <div>
              <p className="semi-bold">{params.username}</p>
              <p>{params.category}</p>
            </div>
          </div>
          <Carousel afterChange={onChange}>{postImg}</Carousel>
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
            <p>View all comments</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Post;
