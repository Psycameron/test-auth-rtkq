import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { isLoading, data: posts, error } = postAPI.useGetPostsQuery(10);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Some error</h1>}
        {posts && posts.map((post) => <PostItem post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
