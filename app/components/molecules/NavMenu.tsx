import NavLink from "../atoms/NavLink";
import { User, LayoutDashboard, LogIn, UserPlus } from "lucide-react";

const NavMenu = () => {
  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/signup", label: "Sign Up", icon: UserPlus },
    { href: "/signin", label: "Sign In", icon: LogIn },
  ];

  return (
    <nav className="flex items-center gap-6">
      {links.map(({ href, label, icon: Icon }) => (
        <div key={href} className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gray-400" />
          <NavLink href={href} label={label} />
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;
