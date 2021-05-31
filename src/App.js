import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Coins } from "./components/Coins/Coins";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="crypto-tracker">
      <Navbar setSearch={setSearch} />
      <Coins searchValue={search} />
    </div>
  );
};
