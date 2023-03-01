import React from "react";
// import { createContext } from "react";
import "../styles/coinheader.css";
import { Link } from "react-router-dom";
// import RoutingComponent from "./RoutingComponent";

// const SingleCoinContext = createContext();
const CoinHeader = () => {
  return (
    <div>
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
          {/* <Link to="/charts">CHARTS</Link> */}
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
      {/* <RoutingComponent /> */}
      {/* </SingleCoinContext.Provider> */}
    </div>
  );
};

export default CoinHeader;
