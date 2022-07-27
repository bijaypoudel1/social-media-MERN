import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Setting from "../../img/setting.svg";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <>
      <div className="w-[40rem] mt-10">
        <div className="flex justify-between gap-10 items-center">
          <img src={Home} className="h-6 w-6" alt="" />
          <img src={Setting} className="h-7 w-7" alt="" />
          <img src={Noti} className="h-6 w-6" alt="" />
          <img src={Comment} className="h-6 w-6" alt="" />
        </div>
        {/* trend side */}
        <TrendCard />
        {/* share btn */}
        <div className="grid place-content-center">
          <button className="bg-button_gradient rounded-xl mt-5  py-3 px-7 text-white ">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSide;
