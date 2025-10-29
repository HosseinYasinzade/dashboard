type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  variant = "secondary",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-4 w-full justify-start";

  const variants = {
    primary:
      "bg-[#0075FF] text-white shadow-[0_4px_14px_rgba(0,117,255,0.4)] hover:bg-[#0A84FF]",
    secondary: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
    outline: "border border-gray-600 text-gray-300 hover:bg-gray-800/40",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
