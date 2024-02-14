import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  //   const handleRemove = (event: React.MouseEvent) => {
  //     event.stopPropagation();
  //     remove(post);
  //   };

  //   const handleUpdate = (event: React.MouseEvent) => {
  //     const title = prompt() || "";
  //     update({ ...post, title });
  //   };

  return (
    <div className="post" key={post.id}>
      {post.id}. {post.title}
      <button>Delete</button>
    </div>
  );
};

export default PostItem;
