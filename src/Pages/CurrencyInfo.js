import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Coins } from "../components/Coins/Coins";
import { CoinInfo } from "../components/CoinInfo/CoinInfo";

export const CurrencyInfo = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="crypto-tracker">
      <Navbar setSearch={setSearch} />
      <CoinInfo />
      <Coins searchValue={search} />
    </div>
  );
};
