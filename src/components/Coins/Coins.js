import React, { useState, useEffect } from "react";
import axios from "axios";
import "./coins.css";
import { Coin } from "./Coin";
import { CoinRowHeaders } from "./CoinRowHeaders";

const COIN_GECKO_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d`;

export const Coins = ({ searchValue }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(COIN_GECKO_URL)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(`There is an error: ${error}, please try to refresh the page`);
      });
  }, []);

  const filteredCoins = coins.filter((coin) => coin.name.includes(searchValue));

  return (
    <div className="coins-wrapper">
      <div className="coins-container">
        <CoinRowHeaders />
        {filteredCoins.map((coin) => {
          const {
            name,
            id,
            image,
            current_price,
            market_cap_rank,
            market_cap,
            total_volume,
            price_change_percentage_24h,
          } = coin;
          return (
            <Coin
              key={id}
              name={name}
              image={image}
              price={current_price}
              id={market_cap_rank}
              marketCap={market_cap}
              marketCapRank={market_cap_rank}
              totalVolume={total_volume}
              priceChange={price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};
