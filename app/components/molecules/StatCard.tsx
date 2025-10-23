"use client";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div
      className="flex items-center justify-between bg-[#0f1535] text-white 
      rounded-2xl p-5 shadow-lg w-full h-[100px] hover:scale-[1.02] transition-transform"
    >
      <div className="flex flex-col">
        <p className="text-lg text-gray-400">{title}</p>
        <h2 className="text-xl font-semibold mt-1">{value}</h2>
      </div>

      <div
        className="w-10 h-10 flex items-center justify-center 
        bg-[#1a1f4a] rounded-xl"
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
