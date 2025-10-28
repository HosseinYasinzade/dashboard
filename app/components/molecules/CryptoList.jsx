import CryptoItem from "../atoms/CryptoItem";

const CryptoList = ({ cryptos }) => {
  return (
    <div>
      {cryptos.map((c) => (
        <CryptoItem key={c.id} name={c.id} price={c.price} />
      ))}
    </div>
  );
};

export default CryptoList;
