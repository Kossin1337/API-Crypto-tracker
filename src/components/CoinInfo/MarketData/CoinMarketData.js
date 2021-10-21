import React from "react";
import { CoinMarketPriceChange } from "./CoinMarketPriceChange";
import { CoinDataATH } from "./CoinDataATH";
import { CoinData24hInfo } from "./CoinData24hInfo";
import { CoinDataMarketCap } from "./CoinDataMarketCap";
import { CoinDataSupply } from "./CoinDataSupply";

export function CoinMarketData({ marketData, name, symbol }) {
  return (
    <div className="coin-market-data">
      <div className="main-market-data">
        <div className="coin-market-price">
          <p>Current Price</p>
          <h2 className="coin-current-price">
            {marketData.current_price.usd}$
          </h2>
        </div>
        <CoinData24hInfo
          high24={marketData.high_24h}
          low24={marketData.low_24h}
        />
        <CoinDataATH
          ath={marketData.ath}
          athPercentage={marketData.ath_change_percentage}
        />
      </div>
      <div className="coin-market-sub-info">
        <CoinDataMarketCap
          rank={marketData.market_cap_rank}
          marketCap={marketData.market_cap}
          totalVolume={marketData.total_volume}
        />
        <CoinDataSupply
          totalSupply={marketData.total_supply}
          maxSupply={marketData.max_supply}
          circulatingSupply={marketData.circulating_supply}
        />
      </div>

      <CoinMarketPriceChange marketData={marketData} />
    </div>
  );
}
