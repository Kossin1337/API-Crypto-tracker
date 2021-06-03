import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Coins } from "./components/Coins/Coins";

export const App = () => {
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);

  return (
    <Router>
      <div className="crypto-tracker">
        <Navbar setSearch={setSearch} />
        <Switch>
          <Route path="/">
            <Coins searchValue={search} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
