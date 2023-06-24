import Image from "next/image";
import React from "react";
import ScheduleCard from "../ScheduleCard";
import { scheduleDetails } from "@/utils/constant";
import rightArrowIcon from "../../../assests/right-arrow.svg";

export default function Schedule() {
  return (
    <div className="flex-1 py-8 px-10 mt-10  bg-white rounded-[20px]">
      <div className="flex justify-between">
        <div className="font-bold text-xl pb-2">Today's Schedule</div>
        <div className="flex gap-2 h-fit">
          <div className="text-[#858585]">See All </div>
          <Image src={rightArrowIcon} alt="arrow-icon" />
        </div>
      </div>
      {scheduleDetails.map((item) => (
        <ScheduleCard data={item} />
      ))}
    </div>
  );
}
