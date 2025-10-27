"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  type Chart as ChartJSInstance,
  type ChartData,
  type ChartOptions,
  type Tick,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

type PriceData = [number, number];

const coins = [
  { id: "bitcoin", label: "Bitcoin" },
  { id: "ethereum", label: "Ethereum" },
];

export default function CryptoChart() {
  const chartRef = useRef<ChartJSInstance<"line", number[], string>>(null);
  const [rawPrices, setRawPrices] = useState<PriceData[][] | null>(null);
  const [chartData, setChartData] = useState<ChartData<
    "line",
    number[],
    string
  > | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const responses = await Promise.all(
        coins.map((coin) =>
          fetch(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=7`
          ).then((r) => r.json())
        )
      );
      if (!mounted) return;
      setRawPrices(responses.map((r) => r.prices as PriceData[]));
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!rawPrices) return;

    const labels = rawPrices[0].map((p, i) =>
      i % 24 === 0
        ? new Date(p[0]).toLocaleDateString("en-US", { weekday: "short" })
        : ""
    );

    const ctx =
      chartRef.current?.ctx ??
      document.createElement("canvas").getContext("2d");

    const makeGradient = (color1: string, color2: string) => {
      if (!ctx) return color1;
      const grad = ctx.createLinearGradient(0, 0, 0, 400);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);
      return grad;
    };

    const datasets = [
      {
        label: "Bitcoin",
        data: rawPrices[0].map((p) => p[1]),
        borderColor: "rgba(0, 150, 255, 1)",
        backgroundColor: makeGradient(
          "rgba(0,150,255,0.45)",
          "rgba(0,150,255,0.02)"
        ),
        fill: true,
        tension: 0.36,
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        label: "Ethereum",
        data: rawPrices[1].map((p) => p[1]),
        borderColor: "rgba(0, 80, 255, 1)",
        backgroundColor: makeGradient(
          "rgba(0,80,255,0.35)",
          "rgba(0,80,255,0.02)"
        ),
        fill: true,
        tension: 0.36,
        borderWidth: 3,
        pointRadius: 0,
      },
    ];

    setChartData({ labels, datasets });
  }, [rawPrices]);

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "#0f1724",
          titleColor: "#fff",
          bodyColor: "#ddd",
        },
      },
      interaction: { intersect: false, mode: "index" },
      scales: {
        x: {
          grid: { color: "rgba(255,255,255,0.06)" },
          ticks: {
            color: "#bfc7d6",
            autoSkip: false,
            callback: function (
              tickValue: string | number,
              index: number,
              ticks: Tick[]
            ) {
              const label = chartData?.labels?.[index];
              return typeof label === "string" && label !== "" ? label : "";
            },
          },
        },
        y: {
          grid: { color: "rgba(255,255,255,0.06)" },
          ticks: { color: "#bfc7d6" },
        },
      },
    }),
    [chartData]
  );

  if (!chartData) return <p className="text-gray-400">Loading chart...</p>;

  return (
    <div className="bg-[#071026] p-6 rounded-2xl shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-2">Crypto (7d)</h2>
      <div className="h-[360px]">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
}
