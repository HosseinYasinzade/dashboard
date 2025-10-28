import CryptoItem from "../atoms/CryptoItem";

interface Crypto {
  id: string;
  price: number;
}

interface CryptoListProps {
  cryptos: Crypto[];
}

function CryptoList({ cryptos }: CryptoListProps) {
  return (
    <div className="space-y-2">
      {cryptos.map((c) => (
        <CryptoItem key={c.id} name={c.id} price={c.price} />
      ))}
    </div>
  );
}

export default CryptoList;
