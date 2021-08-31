import { useState } from "react";
import Blogslist from "./Blogslist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My First Website",
      body: "Lorem ibsum....",
      aurthor: "Mario",
      id: 1,
    },
    {
      title: "My First Website",
      body: "lorem ibsum....",
      aurthor: "John",
      id: 2,
    },
    {
      title: "My First Website",
      body: "Lorem Ibsum....",
      aurthor: "Ibsum",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="Home">
      <Blogslist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};
export default Home;
