type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function IconButton({
  children,
  className = "",
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-gray-500 hover:text-gray-700 transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
}
