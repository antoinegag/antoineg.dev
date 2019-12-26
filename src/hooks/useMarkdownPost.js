import { useState, useEffect } from "react";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

export default function useMarkdownPost(src) {
  const [markdown, setMarkdown] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let res;

      try {
        res = await fetch(`posts/${src}`);
      } catch (error) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        setMarkdown(await res.text());
      }
      setLoading(false);
    };
    fetchPosts();
  }, [src]);

  if (loading) return { loading };

  const post = unified()
    .use(parse)
    .use(remark2react)
    .processSync(markdown).contents;

  return { loading, post };
}
