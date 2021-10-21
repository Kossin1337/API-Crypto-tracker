import React from "react";

export function CoinData24hInfo({ high24, low24 }) {
  return (
    <div className="coin-market-24h-info">
      <div className="coin-market-24h-info-column">
        <p className="ath">24H LOW</p>
        <h4 className="ath">{low24.usd}$</h4>
      </div>
      <div className="coin-market-24h-info-column">
        <p className="ath">24H HIGH</p>
        <h4 className="ath">{high24.usd}$</h4>
      </div>
    </div>
  );
}
