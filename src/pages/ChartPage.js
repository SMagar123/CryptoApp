import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HistoricalData from "../components/HistoricalData";
const ChartPage = () => {
  const { id } = useParams();
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
            <h1 style={{ color: "white" }}>{singleCoin?.id}</h1>
            <p style={{ color: "white" }}>
              {singleCoin?.description?.en.split(".")[0]}
            </p>
            <h2 style={{ color: "white" }}>
              Rank:
              {singleCoin?.market_cap_rank}
            </h2>
            <h2 style={{ color: "white" }}>
              Current Price: Rs.
              {singleCoin?.market_data?.current_price?.inr *
                (1.6).toLocaleString()}
            </h2>
            <h2 style={{ color: "white" }}>
              Market Cap: Rs.
              {singleCoin?.market_data?.market_cap?.inr *
                (1.6).toLocaleString()}
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
