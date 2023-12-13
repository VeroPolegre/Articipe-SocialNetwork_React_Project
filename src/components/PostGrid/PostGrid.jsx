import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PostGrid.scss";

const PostGrid = (props) => {
  if (props.posts?.length === 0) {
    return <div>No posts found</div>;
  }

  // return (
  // 	<main className="main-grid">
  // 		{props.posts.map((post) =>
  // 			post.images.map((image, i) => (
  // 				<div className="img-container" key={i}>
  // 					<Link to={`/posts/${image.postId}`} className="post-link">
  // 						<img src={image.url} />
  // 					</Link>
  // 				</div>
  // 			))
  // 		)}
  // 	</main>
  // );

  return (
    <main className="main-grid">
      {props.posts?.map((post) => {
        return (
          <div className="img-container" key={crypto.randomUUID()}>
            <img src={`http://localhost:8080/uploads/${post.images[0]}`} />
          </div>
        );
      })}
    </main>
  );
};

export default PostGrid;
