import React, { useState } from "react";
import { ProfileModal } from "../ProfileModal";

const InfoCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="bg-[#F7F7F7] p-5 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-primay-black">Your Info</p>
          {/* edit icon */}
          <svg
            onClick={() => {
              setOpenModal(true);
              console.log(openModal);
            }}
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z" />
              <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
            </g>
          </svg>
          {openModal && <ProfileModal setOpenModal={setOpenModal} />}
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-2">
            <p className="text-primary-black">Status</p>
            <p className="text-primary-gray">In Relationship</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-primary-black">Lives In</p>
            <p className="text-primary-gray">Chitwan Nepal</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-primary-black">Works At</p>
            <p className="text-primary-gray">Google LLC</p>
          </div>
        </div>
        <div className="mt-20 flex justify-end">
          <button className="bg-button_gradient px-7 py-2 text-white rounded-xl ">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
