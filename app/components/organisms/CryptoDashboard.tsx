import { useEffect, useState } from "react";
import CryptoList from "../molecules/CryptoList";
import Button from "../atoms/Button";

interface Crypto {
  id: string;
  price: number;
}

function CryptoDashboard() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  const allCoins: string[] = [
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

  const getRandomCoins = (count = 3): string[] => {
    const shuffled = [...allCoins].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const fetchAndAddCoins = async (): Promise<void> => {
    try {
      const newCoins = getRandomCoins(3);
      const ids = newCoins.join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );

      if (!res.ok) {
        console.error("CoinGecko responded with", res.status);
        return;
      }

      const data = await res.json();

      const formatted: Crypto[] = Object.keys(data).map((id) => {
        const coinObj = (data as Record<string, { usd: number }>)[id];
        return {
          id,
          price: coinObj?.usd ?? 0,
        };
      });

      setCryptos((prev) => [...prev, ...formatted]);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  useEffect(() => {
    // بار اول هم یک‌بار بیار
    void fetchAndAddCoins();
  }, []);

  return (
    <div className="bg-slate-900 p-6 w-full min-h-screen text-center">
      <h2 className="text-2xl font-bold text-white mb-4">💰 Crypto Prices</h2>

      <CryptoList cryptos={cryptos} />

      <div className="flex justify-center mt-4">
        <Button variant="primary" onClick={() => void fetchAndAddCoins()}>
          See More
        </Button>
      </div>
    </div>
  );
}

export default CryptoDashboard;
