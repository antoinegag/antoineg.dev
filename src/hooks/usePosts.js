import { useState, useEffect } from "react";

export default function usePosts(type = "projects") {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let res;

      try {
        res = await fetch(`posts/${type}.json`);
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
  }, [type]);

  return { loading, posts };
}
