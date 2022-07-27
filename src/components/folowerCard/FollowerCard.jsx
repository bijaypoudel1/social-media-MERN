import React from "react";
import { followersData } from "../../Data/followersData";

const FollowerCard = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="font-bold text-lg text-primary-black">
          Who is following you
        </h1>
        <div className="">
          {followersData.map((value, index) => {
            return (
              <div
                key={index}
                className="flex mt-5 justify-between items-center gap-10"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={value.img}
                    className="h-16 w-16 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-primary-black font-bold">{value.name}</p>
                    <p className="text-primary-gray font-semibold">
                      @{value.userName}
                    </p>
                  </div>
                </div>
                <button className="bg-button_gradient hover:bg-none hover:bg-white hover:border hover:border-primary-orange hover:text-primary-orange text-white rounded-md px-4 py-2 transition-all duration-200  ease-in-out">
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FollowerCard;
