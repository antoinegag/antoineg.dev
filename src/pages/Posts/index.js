import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";

function Posts() {
  const { loading, posts } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <div>
          <PostCard {...post} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Posts;
