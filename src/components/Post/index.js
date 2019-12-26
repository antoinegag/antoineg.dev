import React from "react";
import useMarkdownPost from "../../hooks/useMarkdownPost";

function Post(props) {
  const { title, src } = props;

  const { loading, rendered } = useMarkdownPost(src);

  if (loading) return <div>Loading...</div>;
  if (!rendered) return <div>Error loading post</div>;

  return (
    <div>
      <h1>{title}</h1>
      {rendered}
    </div>
  );
}

export default Post;
