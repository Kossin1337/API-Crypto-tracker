import React from "react";

export function CoinDataSupply({ totalSupply, maxSupply, circulatingSupply }) {
  return (
    <div className="coin-data-supply">
      {totalSupply ? (
        <p className="coin-data-total-supply">
          Total supply: {totalSupply.toLocaleString()}
        </p>
      ) : (
        <p>Total supply: no data</p>
      )}
      {maxSupply ? (
        <p className="coin-data-max-supply">
          Max supply: {maxSupply.toLocaleString()}
        </p>
      ) : (
        <p>Max supply: no data</p>
      )}
      <p className="coin-data-circulating-supply">
        Circulating supply: {circulatingSupply.toLocaleString()}$
      </p>
    </div>
  );
}
