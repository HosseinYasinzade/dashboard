"use client";
import React, { useState } from "react";
import MenuItem from "@/app/components/molecules/MenuItem";

import Home from "@/app/icons/home";
import Chart from "@/app/icons/chart";
import Card from "@/app/icons/card";
import Build from "@/app/icons/build";
import Person from "@/app/icons/person";
import Document from "@/app/icons/document";
import Rocket from "@/app/icons/rocket";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const [active, setActive] = useState<string>("Dashboard");

  const menuItems = [
    {
      icon: <Home color={active === "Dashboard" ? "white" : "#007bff"} />,
      label: "Dashboard",
    },
    {
      icon: <Chart color={active === "Tables" ? "white" : "#007bff"} />,
      label: "Tables",
    },
    {
      icon: <Card color={active === "Billing" ? "white" : "#007bff"} />,
      label: "Billing",
    },
    {
      icon: <Build color={active === "RTL" ? "white" : "#007bff"} />,
      label: "RTL",
    },
  ];

  const authItems = [
    {
      icon: <Person color={active === "Profile" ? "white" : "#007bff"} />,
      label: "Profile",
    },
    {
      icon: <Document color={active === "Sign In" ? "white" : "#007bff"} />,
      label: "Sign In",
    },
    {
      icon: <Rocket color={active === "Sign Up" ? "white" : "#007bff"} />,
      label: "Sign Up",
    },
  ];

  const handleItemClick = (label: string) => {
    setActive(label);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      onClose?.();
    }
  };

  return (
    <>
      {onClose && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ease-in-out md:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 h-screen text-white flex flex-col justify-between p-5
        bg-gradient-to-b from-[#0f1535] via-[#0b1130] to-[#010416] shadow-2xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:flex md:translate-x-0`}
      >
      <div>
        <div className="flex flex-col items-center mb-10">
          <h1
            className="text-[15px] font-semibold tracking-[0.35em] uppercase
              bg-gradient-to-r from-white via-gray-200 to-gray-500 text-transparent bg-clip-text"
          >
            VISION UI FREE
          </h1>
          <div className="w-full mt-3 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <div className="mb-10">
          <p className="text-xs text-gray-500 uppercase mb-3">Main Pages</p>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                isActive={active === item.label}
                onClick={() => handleItemClick(item.label)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase mb-3">Account Pages</p>
          <div className="space-y-3">
            {authItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                isActive={active === item.label}
                onClick={() => handleItemClick(item.label)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-6" />
      </aside>
    </>
  );
};

export default Sidebar;
