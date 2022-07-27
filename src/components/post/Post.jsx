import React from "react";
import { PostData } from "../../Data/postData";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";

const Post = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col gap-10">
          {PostData.map((value, index) => {
            return (
              <div
                className="shadow-lg p-3 rounded-lg bg-[#F7F7F7]"
                key={index}
              >
                <img
                  src={value.img}
                  className="h-full rounded-lg w-full object-contain"
                  alt=""
                />
                <div className="mt-5 flex items-center gap-10">
                  {/* like */}
                  <img
                    src={value.isLiked ? Like : NotLike}
                    className="max-h-[20rem] object-cover"
                    alt=""
                  />
                  {/* comment */}
                  <img src={Comment} alt="" />
                  {/* share */}
                  <img src={Share} alt="" />
                </div>
                {/* likes */}
                <p className="text-primamry-black mt-3 ">{value.likes} Likes</p>
                <p className="text-lg text-primary-black mt-2 font-bold">
                  {value.name}{" "}
                  <span className="text-primary-gray font-semibold">
                    {value.desc}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
