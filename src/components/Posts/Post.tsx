import { PostType } from "../../redux/features/Posts/api-posts-slice";

export default function Post(post: PostType) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.userId}</p>
      <p>{post.body}</p>
    </>
  );
}
