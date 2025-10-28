"use client";

import Sidebar from "./components/organisms/Sidebar";
import Header from "./components/organisms/Header";
import StatsRow from "./components/organisms/StatsRow";
import CryptoDashboard from "./components/organisms/CryptoDashboard";
import Charts from "./components/organisms/Charts";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#010416] text-white">
      <Sidebar />

      <main className="flex-1 flex flex-col p-6 gap-6">
        <Header />
        <StatsRow />
        <Charts />
        <CryptoDashboard />
      </main>
    </div>
  );
}
