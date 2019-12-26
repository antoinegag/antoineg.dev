import React from "react";
import useMarkdownPost from "../../hooks/useMarkdownPost";

function Post(props) {
  const { title, src } = props;

  const { loading, post: Markdown } = useMarkdownPost(src);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{title}</h1>
      <Markdown />
    </div>
  );
}

export default Post;
