import Sidebar from "./components/organisms/Sidebar";
import Header from "./components/organisms/Header";
import StatsRow from "./components/organisms/StatsRow";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#010416] text-white">
      {/* Sidebar ثابت سمت چپ */}
      <Sidebar />

      {/* محتوای اصلی */}
      <main className="flex-1 flex flex-col p-6 gap-6">
        {/* Header بالای صفحه */}
        <Header />

        {/* StatsRow زیر هدر */}
        <StatsRow />
      </main>
    </div>
  );
}
