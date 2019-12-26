import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let res;

      try {
        res = await fetch("posts/index.json");
      } catch (error) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        setPosts(await res.json());
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return { loading, posts };
}
