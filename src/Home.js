import Blogslist from "./Blogslist";
import useFetch from "./usefetch";

const Home = () => {
  const { isPending, data: blogs } = useFetch("http://localhost:8000/blogs");
  const { handleDelete } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {isPending && <div>loading...</div>}
      {blogs && (
        <Blogslist
          blogs={blogs}
          title="All Blogs"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
export default Home;
