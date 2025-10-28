interface CryptoItemProps {
  name: string;
  price: number;
}

function CryptoItem({ name, price }: CryptoItemProps) {
  return (
    <div className="flex justify-between bg-[#1A1F37] text-white rounded-2xl p-3 shadow-md">
      <span className="font-semibold capitalize">{name}</span>
      <span>${price.toLocaleString()}</span>
    </div>
  );
}

export default CryptoItem;
