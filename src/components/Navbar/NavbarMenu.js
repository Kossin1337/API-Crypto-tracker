import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CurrenciesSubMenu } from "./CurrenciesSubMenu";

export const NavbarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("closed");

  const cryptoCurrenciesList = {
    btc: "Bitcoin",
    eth: "Ether",
    ltc: "Litecoin",
    bnb: "Binance coin",
    dot: "Polkadot",
    xrp: "XRP",
  };
  const fiatCurrenciesList = {
    usd: "US Dollar",
    eur: "Euro",
    jpy: "Japanese Yen",
    gbp: "British Pound Sterling",
    aud: "Australian Dollar",
    cad: "Canadian Dollar",
  };

  const toggleSubMenu = () => {
    setActiveMenu((activeMenu) => (activeMenu === "open" ? "closed" : "open"));
  };

  return (
    <ul className="navbar-menu">
      <Link to="/">
        <li className="menu-item">Home</li>
      </Link>
      <li className="menu-item">Favorites</li>
      <li className="menu-item" onClick={toggleSubMenu}>
        Currency <i className="fas fa-angle-down"></i>
        <div id="sub-menu-wrapper" className={`${activeMenu}`}>
          <CurrenciesSubMenu
            currencyArray={cryptoCurrenciesList}
            menuName={"crypto"}
          />
          <CurrenciesSubMenu
            currencyArray={fiatCurrenciesList}
            menuName={"fiat"}
          />
        </div>
      </li>
    </ul>
  );
};
