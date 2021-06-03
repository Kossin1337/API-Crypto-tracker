import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { CurrencyInfo } from "./Pages/CurrencyInfo";

export const App = () => {
  // const [page, setPage] = useState(1);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currency/:id">
          <CurrencyInfo />
        </Route>
      </Switch>
    </Router>
  );
};
