import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";
import PropTypes from "prop-types";

function PostList(props) {
  const { loading, posts } = usePosts(props.type);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.src}>
          <PostCard {...post} />
          <hr />
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  type: PropTypes.string
};

export default PostList;
