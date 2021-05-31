import React from "react";

export const CoinRowHeaders = () => {
  return (
    <div className="coin coin-headers">
      <div className="coin-header">
        <h2>Coin</h2>
      </div>
      <div className="coin-data">
        <h2>Price</h2>
        <h2>Market Cap</h2>
        <h2>24H</h2>
        <h2>24H Volume</h2>
      </div>
    </div>
  );
};
