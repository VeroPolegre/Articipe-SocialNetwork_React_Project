import "./PostGrid.scss";

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
            <img src={`http://localhost:8080/uploads/${post.images[0]}`} />
          </div>
        );
      })}
    </main>
  );
};

export default PostGrid;
