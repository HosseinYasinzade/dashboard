import Menu from "@/app/components/organisms/Menu";
import HeroLeft from "@/app/components/molecules/HeroLeft";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0F1535] overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20">
        <Menu />
      </div>

      <div className="absolute top-0 left-0 w-1/2 h-full z-10">
        <HeroLeft />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-10 z-0">
        <p className="text-gray-400">Right side content here</p>
      </div>
    </main>
  );
}
