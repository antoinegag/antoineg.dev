import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

function PostList(props) {
  const { type } = props;
  const { loading, posts } = usePosts(type);

  if (loading) return <div>Loading...</div>;

  return (
    <Row>
      {Object.keys(posts).map(post => (
        <Col md="6" className="mb-3" key={post}>
          <PostCard slug={`/${type}/${post}`} {...posts[post]} />
        </Col>
      ))}
    </Row>
  );
}

PostList.propTypes = {
  type: PropTypes.string
};

PostList.defaultProps = {
  type: "projects"
};

export default PostList;
