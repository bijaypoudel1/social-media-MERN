import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-rose-100 to-teal-100 px-5 gap-5 py-3">
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </>
  );
};

export default Home;
