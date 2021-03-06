import React from "react";
import { Link } from "react-router-dom";

export const Coin = ({
  name,
  id,
  coinId,
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
          <Link to={`/currency/${coinId}`}>
            <h1 className="coin-name">{name}</h1>
          </Link>
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
