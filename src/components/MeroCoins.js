import React, { useEffect, useState } from "react";
import "../styles/merocoin.css";
const MeroCoins = () => {
  const [meroCoin, setMeroCoin] = useState([]);
  useEffect(() => {
    async function getMeroCoins() {
      try {
        const coinResponse = await fetch(
          //   "https://data.binance.com/api/v3/ticker/24hr"
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coinData = await coinResponse.json();
        setMeroCoin(coinData.coins);
      } catch (error) {
        console.log(error);
      }
    }
    getMeroCoins();
  }, []);
  return (
    <div className="trendingCoin">
      <div className="trendingCoinHeader">
        <h2>Trending Coins</h2>
        <p>Get information about the crypto coins...</p>
      </div>
      <div className="coinDetails">
        {meroCoin.map((item) => {
          return (
            <div className="coins" key={item.item.id}>
              <img src={item.item.small} alt="images" />
              <h4>{item.item.symbol}</h4>
              {item.item.price_btc * 3068065.33 > 0 ? (
                <p style={{ color: "gold" }}>
                  Rs.
                  {Math.ceil(item.item.price_btc * 3068065.33).toLocaleString()}
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Rs.
                  {Math.ceil(item.item.price_btc * 3068065.33).toLocaleString()}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeroCoins;
