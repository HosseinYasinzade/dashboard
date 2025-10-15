import Button from "@/app/components/atoms/Button";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

const MenuItem = ({
  icon,
  label,
  isActive = false,
  onClick,
}: MenuItemProps) => {
  return (
    <Button variant={isActive ? "primary" : "secondary"} onClick={onClick}>
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 shrink-0
        ${
          isActive ? "bg-[#007bff] text-white" : "bg-transparent text-blue-400"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-medium ${isActive ? "text-white" : "text-gray-300"}`}
      >
        {label}
      </span>
    </Button>
  );
};

export default MenuItem;
