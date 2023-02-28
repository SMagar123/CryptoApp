import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ChartPage = () => {
  const singleCoin = useParams();
  const [singleCoinData, setSingleCoinData] = useState([]);
  useEffect(() => {
    async function getSingleCoin(id) {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setSingleCoinData(data);
      } catch (err) {
        console.log(err);
      }
    }
    getSingleCoin(singleCoin.id);
  }, [singleCoin.id]);

  return (
    <div className="chartPageWrapper">
      <div className="coinDetails">
        <div className="singleCoinImage">
          <img src={singleCoinData.image.large} alt="coinimage" />
        </div>
        <div className="singleCoinTitle">
          <h1 style={{ color: "white" }}>{singleCoin.id.toUpperCase()}</h1>
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
              (1.6).toLocaleString()}{" "}
            M
          </h2>
        </div>
      </div>
      <div className="coinCharts"></div>
    </div>
  );
};

export default ChartPage;
