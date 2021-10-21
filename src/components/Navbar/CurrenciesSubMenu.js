import React, { useState, useContext } from "react";

export function CurrenciesSubMenu({ currencyArray, menuName }) {
  const [currency, setCurrency] = useState("usd");
  // const { currency } = useContext(Currency);

  const handleClick = ({ target }) => {
    console.log(target);
  };

  return (
    <ul className="sub-menu" id={`sub-${menuName}-menu`}>
      {Object.keys(currencyArray).map((item) => {
        return (
          <li
            key={item}
            className="sub-menu-items-cointaner"
            onClick={handleClick}
          >
            <p className="sub-menu-currency">{item.toUpperCase()}</p>
            <p className="sub-menu-currency-fullname">{currencyArray[item]}</p>
          </li>
        );
      })}
    </ul>
  );
}
