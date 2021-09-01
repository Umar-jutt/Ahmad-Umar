const Blogslist = ({ blogs, title }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p> Written by {blog.aurthor}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogslist;
