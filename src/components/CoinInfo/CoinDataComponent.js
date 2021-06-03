import React from "react";

export function CoinDataComponent({ data }) {
  const { name, id, symbol, description, links } = data;
  return (
    <div>
      <h2 className="currency-info-id">
        {data.name} ({data.symbol.toUpperCase()})
      </h2>
      <div className="currency-links"></div>
    </div>
  );
}
