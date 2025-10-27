export async function getCryptoPrice(
  coin: string = "bitcoin",
  currency: string = "usd"
): Promise<number | null> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.warn(`CoinGecko responded with status: ${res.status}`);
      throw new Error("Main API failed");
    }

    const data: Record<string, Record<string, number>> = await res.json();
    return data?.[coin]?.[currency] ?? null;
  } catch (err) {
    console.warn("Direct fetch failed, trying proxy…");

    // تلاش با Proxy
    try {
      const proxyRes = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        { cache: "no-store" }
      );

      if (!proxyRes.ok) {
        console.warn("Proxy fetch failed:", proxyRes.status);
        return null;
      }

      const proxyJson = await proxyRes.json();
      const parsed = JSON.parse(proxyJson.contents);
      return parsed?.[coin]?.[currency] ?? null;
    } catch (proxyErr) {
      console.error("getCryptoPrice proxy error:", proxyErr);
      return null;
    }
  }
}
