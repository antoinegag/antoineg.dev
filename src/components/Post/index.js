import React from "react";
import useMarkdownPost from "../../hooks/useMarkdownPost";
import { Container, Badge } from "reactstrap";

function Post(props) {
  const { title, src, description, indev, tech, link, github } = props;

  const { loading, rendered } = useMarkdownPost(src);

  if (loading) return <div>Loading...</div>;

  if (!rendered) return <div>Error loading post</div>;

  return (
    <Container>
      <h1>{title}</h1>
      {indev && <Badge color="warning">In Development</Badge>}
      <p className="lead">{description}</p>
      {tech && (
        <p>
          {tech.map(entry => (
            <Badge className="mr-1" color="info">
              {entry}
            </Badge>
          ))}
        </p>
      )}
      {github && (
        <u>
          <a href={github} className="link-unstyled">
            <i className="fab fa-github mr-2" />
            Github Repo
          </a>
        </u>
      )}
      <hr />
      {rendered}
    </Container>
  );
}

export default Post;
