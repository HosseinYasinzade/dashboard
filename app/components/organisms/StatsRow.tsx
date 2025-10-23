"use client";
import React, { useEffect, useState } from "react";
import StatCard from "@/app/components/molecules/StatCard";
import { getCryptoPrice } from "@/lib/getCryptoPrice";

import Ton from "@/app/icons/ton";
import Bitcoin from "@/app/icons/bitcoin";
import Usdt from "@/app/icons/usdt";
import Ethereum from "@/app/icons/ethereum";

interface StatItem {
  title: string;
  coin: string;
  icon: React.ReactNode;
  currency: string;
}

const StatsRow = () => {
  const [prices, setPrices] = useState<Record<string, number | null>>({});

  const statsData: StatItem[] = [
    {
      title: "Toncoin",
      coin: "the-open-network",
      icon: <Ton />,
      currency: "usd",
    },
    { title: "Bitcoin", coin: "bitcoin", icon: <Bitcoin />, currency: "usd" },
    { title: "Tether", coin: "tether", icon: <Usdt />, currency: "usd" },
    {
      title: "Ethereum",
      coin: "ethereum",
      icon: <Ethereum />,
      currency: "usd",
    },
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      const newPrices: Record<string, number | null> = {};
      for (const item of statsData) {
        const price = await getCryptoPrice(item.coin, item.currency);
        newPrices[item.coin] = price;
      }
      setPrices(newPrices);
    };

    fetchPrices();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {statsData.map((stat) => (
        <StatCard
          key={stat.coin}
          title={stat.title}
          value={
            prices[stat.coin]
              ? `$${prices[stat.coin]?.toLocaleString()}`
              : "Loading..."
          }
          icon={stat.icon}
        />
      ))}
    </section>
  );
};

export default StatsRow;
