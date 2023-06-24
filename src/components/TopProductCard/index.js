import { pieChartDetails } from "@/utils/constant";
import React from "react";
import rightArrowIcon from "../../../assests/right-arrow.svg";
import PieChart from "../Charts/PieChart";
import Image from "next/image";

export default function TopProduct() {
  return (
    <div className="flex-1 py-8 px-10 mt-10  bg-white rounded-[20px]">
      <div className="flex justify-between">
        <div className="font-bold text-xl pb-2">Top products</div>
        <div className="flex gap-2 h-fit">
          <div className="text-[#858585]">May - June 2021 </div>
          <Image src={rightArrowIcon} alt="arrow-icon" className="rotate-90" />
        </div>
      </div>
      <div className="flex pt-7 gap-10 justify-evenly items-center">
        <PieChart />
        <div className="flex flex-col gap-6">
          {pieChartDetails.map((item) => (
            <div className="flex gap-2 items-baseline">
              <div
                className="w-[12px] h-[12px] rounded-[50%]"
                style={{ background: item.color }}
              />
              <div>
                <div className="text-[14px] font-bold">{item.title}</div>
                <div className="text-[#858585] text-[12px]">{item.percent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
