import React from "react";
import Card from "@/components/Card";
import { extraDetailsCard } from "@/utils/constant";
import Activity from "../ActivityCard";
import TopProduct from "../TopProductCard";
import Schedule from "../Schedule";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Dashboard() {
  return (
    <div className="flex  bg-[#F5F5F5] text-black">
      <Sidebar />
      <div className="flex-[80%] p-14 pl-10">
        <Header />
        <div className="flex justify-between flex-wrap gap-2">
          {extraDetailsCard.map((item) => (
            <Card data={item} />
          ))}
        </div>
        <Activity />
        <div className="flex gap-10 flex-wrap">
          <TopProduct />
          <Schedule />
        </div>
      </div>
    </div>
  );
}
