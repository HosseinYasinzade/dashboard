"use client";

import Image from "next/image";

const HeroLeft = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[320px] sm:min-h-[420px] rounded-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden">
      <Image
        src="/images/Hero.png"
        alt="Vision UI Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#0A0E23]/70 backdrop-blur-sm" />

      <div className="relative z-10 text-center px-6">
        <p className="uppercase text-sm font-medium text-gray-300 tracking-widest mb-2">
          Inspired by the future:
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-500 text-transparent bg-clip-text">
          The Vision UI Dashboard
        </h1>
      </div>
    </div>
  );
};

export default HeroLeft;
