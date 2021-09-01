import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = data.filter((data) => data.id !== id);
    setdata(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setdata(data);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);
  return { data, isPending };
};

export default useFetch;
