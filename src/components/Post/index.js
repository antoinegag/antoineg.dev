import React from "react";
import useMarkdownPost from "../../hooks/useMarkdownPost";
import { Container } from "reactstrap";

function Post(props) {
  const { title, src } = props;

  const { loading, rendered } = useMarkdownPost(src);

  if (loading) return <div>Loading...</div>;
  if (!rendered) return <div>Error loading post</div>;

  return (
    <Container>
      <h1>{title}</h1>
      {rendered}
    </Container>
  );
}

export default Post;
