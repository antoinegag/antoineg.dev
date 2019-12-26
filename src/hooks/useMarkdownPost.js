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
        res = await fetch(`/posts/${src}`);
      } catch (error) {
        console.error(`Error loading post ${src}}`);
        setLoading(false);
        return { loading };
      }
      if (res.ok) {
        const md = await res.text();
        setMarkdown(md);
      }

      setLoading(false);
    };

    fetchPosts();
  }, [src, loading]);

  if (loading) return { loading };

  const rendered = unified()
    .use(parse)
    .use(remark2react)
    .processSync(markdown).contents;

  return { loading, rendered };
}
