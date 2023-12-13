import "./PostGrid.scss";

const PostGrid = (props) => {
	if (!props.posts || props.posts.length === 0) {
		return <div>No posts found</div>;
	}
	const sortedPosts = props.posts.slice().sort((a, b) => {
		const timeA = new Date(a.createdAt).getTime();
		const timeB = new Date(b.createdAt).getTime();
		return timeB - timeA;
	});

	return (
		<main className="main-grid">
			{sortedPosts.map((post) => {
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
