import React from "react";
import FollowerCard from "../folowerCard/FollowerCard";
import LogoSide from "../LogoSide/LogoSide";
import ProfileCard from "../profileCard/ProfileCard";

const ProfileSide = () => {
  return (
    <>
      <div className="w-[40rem] h-screen overflow-auto">
        <LogoSide />
        <ProfileCard />
        <FollowerCard />
      </div>
    </>
  );
};

export default ProfileSide;
