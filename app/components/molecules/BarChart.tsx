"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type PriceData = [number, number];

type CoinGeckoResponse = {
  prices: PriceData[];
};

const generateFallbackPrices = (days = 7): PriceData[] => {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  return Array.from({ length: days }).map((_, i) => {
    const timestamp = now - (days - i) * dayMs;
    const price = 1 + Math.sin(i / 2) * 0.1 + i * 0.02;
    return [timestamp, Number(price.toFixed(4))];
  });
};

export default function BarChart() {
  const [chartData, setChartData] = useState<ChartData<
    "bar",
    number[],
    string
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url =
          "https://api.coingecko.com/api/v3/coins/toncoin/market_chart?vs_currency=usd&days=7";

        let data: CoinGeckoResponse | null = null;

        try {
          const res = await fetch(url, { cache: "no-store" });
          if (res.ok) {
            data = (await res.json()) as CoinGeckoResponse;
          } else {
            console.warn("CoinGecko returned non-ok status:", res.status);
          }
        } catch (jsonErr) {
          console.warn("Failed to parse JSON from CoinGecko:", jsonErr);
        }

        if (!data?.prices || !Array.isArray(data.prices)) {
          console.warn("Invalid API response, using fallback data");
          data = { prices: generateFallbackPrices(7) };
        }

        const prices = data.prices;
        const desiredPoints = 7;
        const stride =
          prices.length > desiredPoints
            ? Math.floor(prices.length / desiredPoints)
            : 1;

        const filtered = prices.filter((_, i) => i % stride === 0);

        const labels = filtered.map((p) =>
          new Date(p[0]).toLocaleDateString("en-US", { weekday: "short" })
        );
        const values = filtered.map((p) => Number(p[1]));

        setChartData({
          labels,
          datasets: [
            {
              label: "TON",
              data: values,
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 10,
              barThickness: 16,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching chart data:", err);
        setError("Failed to load chart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#9ca3af",
          font: { size: 12 },
        },
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "#9ca3af",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div className="bg-[#0a0f1d] p-6 rounded-2xl shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-3">
        TON Coin (7 Days)
      </h2>

      {loading && <p className="text-gray-400">Loading chart...</p>}
      {error && <p className="text-red-400">Error: {error}</p>}
      {!loading && !chartData && !error && (
        <p className="text-gray-400">No data available.</p>
      )}

      {!loading && chartData && (
        <div className="h-[280px]">
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
}
