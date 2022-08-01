import { useFetchPostsQuery } from "../../redux/features/Posts/api-posts-slice";
import Post from "./Post";

export default function Posts() {
  const {
    data: posts = [],
    isFetching,
    isSuccess,
    isError,
  } = useFetchPostsQuery(null, {
    pollingInterval: 0,
  });

  return (
    <>
      {isSuccess &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
    </>
  );
}
