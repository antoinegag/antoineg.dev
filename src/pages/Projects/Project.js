import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import Post from "../../components/Post";

export default function Project() {
  let { project } = useParams();

  const { loading, post } = usePost(project, "projects");

  if (loading) return <div>Loading...</div>;

  if (!post) return <div>Post not found</div>;

  return <Post {...post} />;
}
