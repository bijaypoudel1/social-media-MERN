import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { PostData } from "../../Data/postData";

const ProfileCard = () => {
  const postSide = false;

  return (
    <>
      <div className="mt-10 shadow-xl rounded-b-3xl">
        <div className="">
          <div className="relative ">
            <img src={Cover} className="w-full rounded-t-3xl" alt="" />
            <img
              src={Profile}
              className="absolute shadow-xl h-28 w-28 z-10 left-1/2 -translate-x-1/2 rounded-full -bottom-10"
              alt=""
            />
          </div>
          <div className="mt-14 flex flex-col gap-2 items-center">
            <h1 className="text-primary-black font-bold text-xl">
              Scarlet Johnson
            </h1>
            <h1 className="text-primary-gray text-xl font-semibold">
              Froent End Engineer
            </h1>
          </div>

          <div className="mt-6 px-10 rounded-b-3xl ">
            <div className=" bg-gray-300 mx-auto h-0.5 w-full "></div>
            <div className="flex justify-between  mt-5">
              <div className="flex flex-col items-center gap-1">
                <p className="text-primary-black font-bold text-2xl">7,344 </p>
                <p className="text-primary-gray font-semibold">Followers</p>
              </div>
              <div className="h-20 w-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-primary-black font-bold text-2xl">1</p>
                <p className="text-primary-gray font-semibold">Following</p>
              </div>

              {postSide && (
                <>
                  <div className="h-20 w-0.5 bg-gray-300"></div>

                  <div className="flex flex-col items-center gap-1">
                    <p className="text-primary-black font-bold text-2xl">
                      {PostData.length}
                    </p>

                    <p className="text-primary-gray font-semibold">Post</p>
                  </div>
                </>
              )}
            </div>
            <div className=" bg-gray-300 mt-5 mx-auto h-0.5 w-full "></div>
            {!postSide && (
              <h1 className="text-2xl font-bold text-primary-orange py-6 text-center">
                My Profile
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
