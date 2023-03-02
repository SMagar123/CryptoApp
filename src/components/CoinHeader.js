import React from "react";
import "../styles/coinheader.css";
import { Link } from "react-router-dom";
const CoinHeader = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="logo">
          <Link to="/">
            <h2>MEROCOINs</h2>
          </Link>
        </div>
        <div className="navbar">
          <Link to="/">HOME</Link>
          {/* <Link to="/charts">CHARTS</Link> */}
          {/* <Link to="/charts">CHARTS</Link> */}
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
