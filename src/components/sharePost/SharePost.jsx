import React from "react";
import ProfileImg from "../../img/img1.png";

const SharePost = () => {
  return (
    <>
      <div className=" p-3 rounded-xl shadow-lg ">
        {/* input and profile img */}
        <div className="flex gap-2">
          <img src={ProfileImg} className="h-10 w-10 rounded-full" alt="" />
          <input
            type="text"
            name=""
            id=""
            className="bg-primary-inputColor px-3 rounded-lg w-full py-3"
            placeholder="What's Happening"
          />
        </div>
        {/* share options */}
        <div className="flex gap-10 mt-3 justify-center items-center">
          {/* phot */}
          <div className="flex items-center">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="green"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z" />
                <circle cx="8.5" cy="8.5" r="2.5" />
                <path d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z" />
              </g>
            </svg>
            <p className="text-primary-black">Photo</p>
          </div>
          {/* video */}
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-primary-black"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"
              />
            </svg>
            <p className="text-primary-black">Video</p>
          </div>
          {/* location */}
          <div className="flex items-center">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="orange"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
              </g>
            </svg>
            <p className="text-primary-black">Location</p>
          </div>
          {/* schedule */}
          <div className="flex items-center">
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <g fill="pink">
                <path
                  fill-rule="evenodd"
                  d="M35 40a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1ZM14 23h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM14 31h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 12a1 1 0 0 1 1-1h5V9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h20.255a6.972 6.972 0 0 1-.965-2H9a1 1 0 0 1-1-1V12Zm26 16.07a7.062 7.062 0 0 1 2 0V12a3 3 0 0 0-3-3h-3v2h3a1 1 0 0 1 1 1v16.07ZM16 11h10.563V9H16v2Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M36 18H8v-2h28v2Z"
                  clip-rule="evenodd"
                />
                <path d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm14 0a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Z" />
              </g>
            </svg>
            <p className="text-primary-black">Schedule</p>
          </div>
          {/* share btn */}
          <button className="bg-button_gradient px-4 py-2 text-white rounded-lg">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default SharePost;
