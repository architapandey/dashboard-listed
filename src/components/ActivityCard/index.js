import Image from "next/image";
import React from "react";
import rightArrowIcon from "../../../assests/right-arrow.svg";
import ActivityChart from "../Charts/LineChart";

export default function Activity() {
  return (
    <div className=" bg-white rounded-lg mt-10 px-10 py-8">
      <div className="flex justify-between items-center pb-8">
        <div>
          <div className="font-bold text-xl">Activities</div>
          <div className="flex gap-2 h-fit">
            <div className="text-[#858585]">May - June 2021 </div>
            <Image
              src={rightArrowIcon}
              alt="arrow-icon"
              className="rotate-90"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-[6px] items-center">
            <div className="rounded-[50%] w-[10px] h-[10px] bg-[#E9A0A0]" />
            <div>Guest</div>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="rounded-[50%] w-[10px] h-[10px] bg-[#9BDD7C]" />
            <div>User</div>
          </div>
        </div>
      </div>

      <ActivityChart />
    </div>
  );
}
