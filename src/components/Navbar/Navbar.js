import React from "react";
import "./navbar.css";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarCoinSearch } from "./NavbarCoinSearch";

export const Navbar = ({ setSearch }) => {
  
  const handleSearch = (coinSearch) => {
    setSearch(coinSearch);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarCoinSearch handleSearch={handleSearch} />
      </div>
    </div>
  );
};
