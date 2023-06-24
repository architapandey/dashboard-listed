import React from "react";

export default function ScheduleCard({ data }) {
  const { title, time, location, color } = data;
  return (
    <div className="flex gap-2 py-4">
      <div style={{ background: color }} className="w-[5px]"></div>
      <div>
        <div className="text-[#666666] font-bold">{title}</div>
        <div className="text-[#999999]">{time}</div>
        <div className="text-[#999999]">{location}</div>
      </div>
    </div>
  );
}
