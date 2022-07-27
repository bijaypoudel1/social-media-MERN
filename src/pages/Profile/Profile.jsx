import Post from "../../components/post/Post";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLft/ProfileLeft";
import RightSide from "../../components/rightSide/RightSide";

const Profile = () => {
  return (
    <div className="flex bg-gradient-to-r from-rose-100 to-teal-100 px-5 gap-5 py-3">
      <ProfileLeft />
      <div className="h-screen overflow-auto px-4">
        <ProfileCard />
        <Post />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
