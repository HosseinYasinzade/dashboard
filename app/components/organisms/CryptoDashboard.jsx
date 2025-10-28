import { useEffect, useState } from "react";
import CryptoList from "../molecules/CryptoList";
import Button from "../atoms/Button";

const CryptoDashboard = () => {
  const [cryptos, setCryptos] = useState([]);

  const allCoins = [
    "bitcoin",
    "ethereum",
    "dogecoin",
    "solana",
    "cardano",
    "xrp",
    "polkadot",
    "litecoin",
    "tron",
    "avalanche",
    "chainlink",
    "uniswap",
    "stellar",
    "cosmos",
    "vechain",
    "aptos",
    "arbitrum",
    "optimism",
    "near",
    "filecoin",
  ];

  const getRandomCoins = (count = 3) => {
    const shuffled = [...allCoins].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const fetchAndAddCoins = async () => {
    const newCoins = getRandomCoins(3);
    const ids = newCoins.join(",");
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
    );
    const data = await res.json();

    const formatted = Object.entries(data).map(([id, val]) => ({
      id,
      price: val.usd,
    }));

    setCryptos((prev) => [...prev, ...formatted]);
  };

  useEffect(() => {
    fetchAndAddCoins();
  }, []);

  return (
    <div className="bg-slate-900 p-6 w-full min-h-screen text-center">
      <h2 className="text-2xl font-bold text-white mb-4">💰 Crypto Prices</h2>

      <CryptoList cryptos={cryptos} />

      <div className="flex justify-center mt-4">
        <Button variant="primary" onClick={fetchAndAddCoins}>
          See More
        </Button>
      </div>
    </div>
  );
};

export default CryptoDashboard;
