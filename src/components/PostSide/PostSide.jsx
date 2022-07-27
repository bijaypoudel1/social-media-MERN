import React from "react";
import Post from "../post/Post";
import SharePost from "../sharePost/SharePost";

const PostSide = () => {
  return (
    <>
      <div className="mt-3 h-screen overflow-auto">
        <SharePost />
        <Post />
      </div>
    </>
  );
};

export default PostSide;
