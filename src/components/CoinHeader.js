import React from "react";
// import { createContext } from "react";
import "../styles/coinheader.css";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChartPage from "../pages/ChartPage";
import AboutPage from "../pages/AboutPage";
// const SingleCoinContext = createContext();
const CoinHeader = () => {
  return (
    <>
      {/* <SingleCoinContext.Provider value="bitcoin"> */}
      <div className="headerWrapper">
        <div className="logo">
          <Link to="/">
            <h2>MEROCOINs</h2>
          </Link>
        </div>
        <div className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/charts">CHARTS</Link>
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/charts">
          <ChartPage />
        </Route>
        <Route exact path="/charts/:id">
          <ChartPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      {/* </SingleCoinContext.Provider> */}
    </>
  );
};

export default CoinHeader;
