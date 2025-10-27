"use client";

import React from "react";
import CryptoChart from "../molecules/CryptoChart";
import BarChart from "../molecules/BarChart";

export default function Charts() {
  return (
    <div className="w-full flex flex-col gap-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <CryptoChart />
        <BarChart />
      </div>
    </div>
  );
}
