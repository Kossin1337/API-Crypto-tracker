import React from "react";

export const Coin = ({
  name,
  id,
  image,
  price,
  marketCap,
  marketCapRank,
  symbol,
  totalVolume,
  priceChange,
}) => {
  const priceChangeIndicator = priceChange < 0 ? "red" : "green";

  return (
    <div className="coin-row">
      <div className="coin">
        <div className="coin-info">
          <p className="coin-id">#{marketCapRank}</p>
          <img className="coin-img" src={image} alt={id} />
          <h1 className="coin-name">{name}</h1>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">${marketCap.toLocaleString()}</p>
          <p id="coin-percent" className={priceChangeIndicator}>
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-total-volume">${totalVolume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
