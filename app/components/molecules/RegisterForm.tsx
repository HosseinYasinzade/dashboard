"use client";
import { useState } from "react";
import Button from "@/app/components/atoms/Button";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";

export default function RegisterForm() {
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto text-white mt-20">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-1">Welcome!</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Use these awesome forms to login or create new
          <br /> account in your project for free.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        <div className="flex justify-center gap-4 mb-6">
          <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
            <FaFacebookF className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
            <FaApple className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
            <FaGoogle className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-300 block mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0075FF]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0075FF]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 block mb-2">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0075FF]"
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <button
              type="button"
              onClick={() => setRemember(!remember)}
              className={`w-9 h-5 rounded-full transition-all duration-300 ${
                remember ? "bg-[#0075FF]" : "bg-gray-600"
              } flex items-center p-0.5`}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  remember ? "translate-x-4" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span className="text-sm text-gray-400">Remember me</span>
          </div>

          <Button
            variant="primary"
            className="w-full justify-center py-3 mt-4 rounded-xl font-semibold"
          >
            SIGN UP
          </Button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © 2021, Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="text-white">Simmmple & Creative Tim</span> for a better
        web
        <div className="flex justify-center gap-4 mt-2 text-gray-400">
          <a href="#" className="hover:text-white text-xs">
            Marketplace
          </a>
          <a href="#" className="hover:text-white text-xs">
            Blog
          </a>
          <a href="#" className="hover:text-white text-xs">
            License
          </a>
        </div>
      </div>
    </div>
  );
}
