import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoricalData from "../components/HistoricalData";
const ChartPage = () => {
  const { id } = useParams();
  const [singleCoinData, setSingleCoinData] = useState();
  useEffect(() => {
    async function getSingleCoin() {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setSingleCoinData(data);
      } catch (err) {
        console.log(err);
      }
    }
    getSingleCoin();
  }, [id]);
  return (
    <>
      <div className="chartPageWrapper">
        <div className="coinDetails">
          <div className="singleCoinImage">
            <img src={singleCoinData.image.large} alt="coinimage" />
          </div>
          <div className="singleCoinTitle">
            <h1 style={{ color: "white" }}>
              {singleCoinData.id.toUpperCase()}
            </h1>
            <p style={{ color: "white" }}>
              {singleCoinData.description.en.split(".")[0]}
            </p>
            <h2 style={{ color: "white" }}>
              Rank:
              {singleCoinData.market_cap_rank}
            </h2>
            <h2 style={{ color: "white" }}>
              Current Price: Rs.
              {singleCoinData.market_data.current_price.inr *
                (1.6).toLocaleString()}
            </h2>
            <h2 style={{ color: "white" }}>
              Market Cap: Rs.
              {singleCoinData.market_data.market_cap.inr *
                (1.6).toLocaleString()}
              M
            </h2>
          </div>
        </div>
        <div className="coinCharts">
          <HistoricalData coin={singleCoinData} />
        </div>
      </div>
    </>
  );
};

export default ChartPage;
