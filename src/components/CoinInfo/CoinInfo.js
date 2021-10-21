import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./coinInfo.css";
import { CoinDataComponent } from "./CoinDataComponent";

export function CoinInfo() {
  const [coinData, setCoinData] = useState(null);
  const { coinId } = useParams();

  useEffect(() => {
    console.log(coinId);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then((response) => {
        setCoinData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(`There is an error: ${error}, please try to refresh the page`);
      });
  }, [coinId]);

  return (
    <div className="currency-info-wrapper">
      {coinData ? (
        <CoinDataComponent data={coinData} />
      ) : (
        <p>Loading currency data...</p>
      )}
    </div>
  );
}
