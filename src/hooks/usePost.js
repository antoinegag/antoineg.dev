import usePosts from "./usePosts";

export default function usePost(slug, type) {
  const { loading, posts } = usePosts(type);

  if (loading) return { loading };

  return { loading, post: posts[slug] };
}
