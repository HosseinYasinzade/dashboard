import Breadcrumb from "@/app/components/molecules/Breadcrumb";
import SearchBar from "@/app/components/molecules/SearchBar";
import IconButton from "@/app/components/atoms/IconButton";
import Notification from "@/app/icons/notification";
import Settings from "@/app/icons/settings";
import User from "@/app/icons/user";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-6 rounded-xl shadow-sm">
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
      </div>
    </header>
  );
}
