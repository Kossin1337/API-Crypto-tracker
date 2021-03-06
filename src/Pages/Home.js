import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Coins } from "../components/Coins/Coins";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="crypto-tracker">
      <Navbar setSearch={setSearch} />
      <Coins searchValue={search} />
    </div>
  );
};
