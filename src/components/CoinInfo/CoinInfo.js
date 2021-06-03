import React from "react";
import { Link, useParams } from "react-router-dom";
import "./coinInfo.css";

export function CoinInfo() {
  const { id } = useParams();

  return (
    <div className="currency-info-wrapper">
      <div className="currency-info">
        <Link to="/">
          <p className="back-to-homepage">
            <i class="fas fa-arrow-left"></i>
          </p>
        </Link>
        <h1>{id}</h1>
      </div>
    </div>
  );
}
