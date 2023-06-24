import Image from "next/image";
import React from "react";

export default function Card({ data }) {
  const { title, icon, price, color } = data;
  return (
    <div
      style={{ background: color }}
      className={`w-[220px] rounded-lg py-4 px-6`}
    >
      <div className="flex justify-end">
        <Image src={icon} alt="icon" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="">{title}</div>
        <div className="text-2xl font-bold">{price}</div>
      </div>
    </div>
  );
}
