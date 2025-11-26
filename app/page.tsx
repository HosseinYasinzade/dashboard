"use client";
import { useState } from "react";

import Sidebar from "./components/organisms/Sidebar";
import Header from "./components/organisms/Header";
import StatsRow from "./components/organisms/StatsRow";
import CryptoDashboard from "./components/organisms/CryptoDashboard";
import Charts from "./components/organisms/Charts";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-[#010416] text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 flex flex-col p-6 gap-6">
        <Header onMenuClick={toggleSidebar} />
        <StatsRow />
        <Charts />
        <CryptoDashboard />
      </main>
    </div>
  );
}
