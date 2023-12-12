import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PostGrid.scss";

const PostGrid = () => {
	const { posts } = useSelector((state) => state.posts);
	console.log("posts", posts);

	if (posts.length === 0) {
		return <div>No posts found</div>;
	}

	return (
		<main className="main-grid">
			{posts.map((post) =>
				post.images.map((image, i) => (
					<div className="img-container" key={i}>
						<Link to={`/posts/${image.postId}`} className="post-link">
							<img src={image.url} />
						</Link>
					</div>
				))
			)}
		</main>
	);
};

export default PostGrid;
