export async function getCryptoPrice(
  coin: string = "bitcoin",
  currency: string = "usd"
): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`${coin}`);
    }

    const data: Record<string, Record<string, number>> = await res.json();
    return data[coin]?.[currency] ?? null;
  } catch (error) {
    console.error("getCryptoPrice:", (error as Error).message);
    return null;
  }
}
