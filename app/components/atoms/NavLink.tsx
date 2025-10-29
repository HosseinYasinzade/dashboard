"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

const NavLink = ({ href, label, className = "" }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-300 ${
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      } ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
