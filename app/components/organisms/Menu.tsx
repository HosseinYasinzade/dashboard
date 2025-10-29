"use client";

import NavMenu from "@/app/components/molecules/NavMenu";
import Button from "@/app/components/atoms/Button";

export default function Menu() {
  return (
    <header className="flex justify-center py-6">
      <div
        className="flex items-center justify-between gap-8 px-6 py-3 rounded-2xl
        backdrop-blur-md bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        w-[90%] max-w-5xl border border-white/20"
      >
        <h1 className="text-white font-semibold tracking-wider text-sm">
          VISION UI <span className="font-light text-gray-300">FREE</span>
        </h1>

        <NavMenu />

        <div className="hidden sm:block">
          <Button variant="primary" className="w-auto px-5 py-2 text-sm">
            Free Download
          </Button>
        </div>
      </div>
    </header>
  );
}
