import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";
import PropTypes from "prop-types";

function PostList(props) {
  const { type } = props;
  const { loading, posts } = usePosts(type);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {Object.keys(posts).map(post => (
        <div key={post}>
          <PostCard slug={`/${type}/${post}`} {...posts[post]} />
          <hr />
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  type: PropTypes.string
};

PostList.defaultProps = {
  type: "projects"
};

export default PostList;
