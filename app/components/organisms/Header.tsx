import Breadcrumb from "@/app/components/molecules/Breadcrumb";
import SearchBar from "@/app/components/molecules/SearchBar";
import IconButton from "@/app/components/atoms/IconButton";
import Notification from "@/app/icons/notification";
import Settings from "@/app/icons/settings";
import User from "@/app/icons/user";

type HeaderProps = {
  onMenuClick?: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
<<<<<<< HEAD
    <header className="flex justify-between items-center h-16 px-6 rounded-xl shadow-sm w-full">
      <Breadcrumb />
      <div className="flex items-center gap-4">
        <SearchBar />
        <IconButton>
          <User className="w-5 h-5" />
        </IconButton>
        <IconButton>
          <Settings className="w-5 h-5" />
        </IconButton>
        <IconButton>
          <Notification className="w-5 h-5" />
        </IconButton>
=======
    <header className="w-full rounded-xl shadow-sm bg-white/5 backdrop-blur-md border border-white/10 px-4 py-4 flex flex-wrap gap-4 items-center">
      <div className="flex items-center justify-between w-full md:w-auto gap-3">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <Breadcrumb />
      </div>

      <div className="flex items-center gap-3 flex-wrap w-full md:flex-nowrap md:flex-1">
        <div className="w-full md:w-auto flex-1 min-w-[200px]">
          <SearchBar inputClassName="w-full md:w-72" />
        </div>
        <div className="flex items-center gap-2 w-full justify-end md:w-auto md:ml-auto">
          <IconButton>
            <User className="w-5 h-5" />
          </IconButton>
          <IconButton>
            <Settings className="w-5 h-5" />
          </IconButton>
          <IconButton>
            <Notification className="w-5 h-5" />
          </IconButton>
          <LogoutButton />
        </div>
>>>>>>> 72ef3e2 (feat: setup auth with env variables)
      </div>
    </header>
  );
}
