const CryptoItem = ({ name, price }) => {
  return (
    <div className="flex justify-between bg-slate-800 text-white rounded-2xl p-3 my-1 shadow-md">
      <span className="font-semibold capitalize">{name}</span>
      <span>${price?.toLocaleString()}</span>
    </div>
  );
};

export default CryptoItem;
