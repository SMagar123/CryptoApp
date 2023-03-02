import HTMLReactParser from "html-react-parser";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../App";
import HistoricalData from "../components/HistoricalData";
import "../styles/chartpage.css";
const ChartPage = () => {
  const { id } = useParams();
  const currency = useContext(CurrencyContext);
  const [singleCoin, setSingleCoinData] = useState([]);
  useEffect(() => {
    async function getSingleCoin() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setSingleCoinData(data);
      } catch (err) {
        console.error(err);
      }
    }
    getSingleCoin();
  }, [id]);
  return (
    <>
      <div className="chartPageWrapper">
        <div className="coinDetails">
          <div className="singleCoinImage">
            <img src={singleCoin?.image?.large} alt="coinimage" />
          </div>
          <div className="singleCoinTitle">
            <h1 style={{ color: "white", fontSize: "bold" }}>
              {singleCoin?.id}
            </h1>
            <p style={{ color: "white" }}>
              {HTMLReactParser(`${singleCoin?.description?.en.split(".")[0]}`)}
            </p>
            <h2 style={{ color: "white" }}>
              <p>Rank</p>
              {singleCoin?.market_cap_rank}
            </h2>
            <h2 style={{ color: "white" }}>
              <p>Current Price</p> {currency}
              {(
                singleCoin?.market_data?.current_price?.inr * 1.6
              ).toLocaleString()}
            </h2>
            <h2 style={{ color: "white" }}>
              Market Cap {currency}
              {(
                singleCoin?.market_data?.market_cap?.inr * 1.6
              ).toLocaleString()}{" "}
              M
            </h2>
          </div>
        </div>
        <div className="coinCharts">
          <HistoricalData coin={singleCoin} />
        </div>
      </div>
    </>
  );
};

export default ChartPage;
