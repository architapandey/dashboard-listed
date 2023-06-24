import Image from "next/image";
import React from "react";
import searchIcon from "../../../assests/search-icon.svg";
import bellIcon from "../../../assests/bell-icon.svg";
import avatarImage from "../../../assests/avatar.png";

export default function Header() {
  return (
    <div className="flex justify-between mb-10">
      <div className=" text-2xl  font-bold ">Dashboard</div>
      <div className="flex gap-8">
        <div className="flex rounded-xl">
          <input
            className="rounded-l-lg p-2 focus:outline-none"
            placeholder="Search..."
          />
          <div className="bg-white flex items-center rounded-r-lg px-4">
            <Image src={searchIcon} alt="search" />
          </div>
        </div>
        <Image src={bellIcon} alt="bell" />
        <Image
          src={localStorage.getItem("avatar") || avatarImage}
          width={36}
          height={36}
          alt="avatar"
          className="w-[36px] h-[36px] rounded-[50%]"
        />
      </div>
    </div>
  );
}
