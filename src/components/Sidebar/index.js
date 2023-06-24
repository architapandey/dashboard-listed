import { sideBarItems } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
    router.push("/login");
  };

  return (
    <div className="flex-[20%] px-8 m-4 bg-black  rounded-3xl flex flex-col justify-between">
      <div>
        <div className="text-4xl font-bold mt-6 text-white py-4 m-4">
          Board.
        </div>
        {sideBarItems.map((item) => (
          <div className=" mt-6 text-white py-4 m-4 text-[18px] flex gap-4">
            <Image src={item.icon} />
            {item.title}
          </div>
        ))}
      </div>
      <div className="text-[18px]">
        <div className=" text-white  m-4 text-[18px]">Help</div>
        <div className=" text-white pb-4  m-4 text-[18px]">Contact us</div>
        <div
          className=" text-white pb-4  m-4 text-[18px] cursor-pointer"
          onClick={logout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
