import React from "react";
import { Link } from "react-router-dom";

export function CoinDataAbsoluteButtons() {
  return (
    <div className="absolute-currency-buttons">
      <Link to="/">
        <p className="back-to-homepage">
          <i className="fas fa-arrow-left"></i>
        </p>
      </Link>
      <button className="add-to-favourites">
        <i className="fas fa-star"></i>
      </button>
    </div>
  );
}
