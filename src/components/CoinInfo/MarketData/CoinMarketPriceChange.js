import React from "react";

export function CoinMarketPriceChange({ marketData }) {
  const marketData_percentage = {
    "24H": marketData.price_change_percentage_24h.toFixed(2),
    "7D": marketData.price_change_percentage_7d.toFixed(2),
    "14D": marketData.price_change_percentage_14d.toFixed(2),
    "30D": marketData.price_change_percentage_30d.toFixed(2),
    "60D": marketData.price_change_percentage_60d.toFixed(2),
    "200D": marketData.price_change_percentage_200d.toFixed(2),
    "1Y": marketData.price_change_percentage_1y.toFixed(2),
  };
  
  return (
    <div className="coin-market-price-change">
      <h3 className="coin-market-price-change-header">
        Percentage Price change
      </h3>
      {marketData_percentage &&
        Object.keys(marketData_percentage).map((item) => {
          const percentageChangeColorIndicator =
            marketData_percentage[item] > 0 ? "green" : "red";
          return (
            <div key={item} className="price-change-column">
              <p className="price-change-header">{item}</p>
              <p
                id="price-change-value"
                className={percentageChangeColorIndicator}
              >
                {marketData_percentage[item]}%
              </p>
            </div>
          );
        })}
    </div>
  );
}
