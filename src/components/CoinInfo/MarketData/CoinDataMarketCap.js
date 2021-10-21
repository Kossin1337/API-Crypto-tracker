import React from "react";

export function CoinDataMarketCap({ rank, marketCap, totalVolume }) {
  return (
    <div className="coin-data-market-cap">
      <h3>Coin rank #{rank}</h3>
      <p>Market cap: {marketCap.usd.toLocaleString()}$</p>
      <p>Total volume: {totalVolume.usd.toLocaleString()}$</p>
    </div>
  );
}
