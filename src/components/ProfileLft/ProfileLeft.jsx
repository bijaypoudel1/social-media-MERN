import React from "react";
import FollowerCard from "../folowerCard/FollowerCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSide from "../LogoSide/LogoSide";

const ProfileLeft = () => {
  return (
    <>
      <div className="space-y-10 w-[40rem] h-screen overflow-auto">
        <LogoSide />
        <InfoCard />
        <FollowerCard />
      </div>
    </>
  );
};

export default ProfileLeft;
