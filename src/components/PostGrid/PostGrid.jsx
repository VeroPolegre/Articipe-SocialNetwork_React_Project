import "./PostGrid.scss";
const API_URL = "https://socialnetwork-backend-project-dev-qxbk.4.us-1.fl0.io";

const PostGrid = (props) => {
  if (!props.posts || props.posts.length === 0) {
    return <h4 className="no-posts">No posts found</h4>;
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
            {post.images.length > 1 ? (
              <div className="material-symbols-outlined">library_add</div>
            ) : (
              ""
            )}
            <img src={`${API_URL}/uploads/${post.images[0]}`} />
          </div>
        );
      })}
    </main>
  );
};

export default PostGrid;
