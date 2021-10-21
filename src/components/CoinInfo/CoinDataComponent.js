import React from "react";
import { CoinDataAbsoluteButtons } from "./MarketData/CoinDataAbsoluteButtons";
import { CoinDataLinks } from "./CoinDataLinks";
import { CoinMarketData } from "./MarketData/CoinMarketData";

export function CoinDataComponent({ data }) {
  const { id, symbol, name, image, links, market_data } = data;

  return (
    <div className="currency-info">
      <CoinDataAbsoluteButtons />
      <div className="main-currency-info">
        <h2 className="currency-info-id">
          {data.name} ({symbol.toUpperCase()})
        </h2>
        <img src={image.small} alt={`${id} img`} />
      </div>
      <CoinMarketData marketData={market_data} name={name} symbol={symbol} />
      <CoinDataLinks links={links} thumbImage={image.thumb} />
    </div>
  );
}
