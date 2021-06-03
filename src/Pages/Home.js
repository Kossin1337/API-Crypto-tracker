import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Coins } from "./components/Coins/Coins";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home">
      <Coins searchValue={search} />
      <Navbar setSearch={setSearch} />
    </div>
  );
};
