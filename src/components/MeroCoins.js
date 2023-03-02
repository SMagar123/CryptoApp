import React, { useContext, useEffect, useState } from "react";
import "../styles/merocoin.css";
import { CurrencyContext } from "../App";
const MeroCoins = () => {
  const currencyFormat = useContext(CurrencyContext);
  const [meroCoin, setMeroCoin] = useState([]);
  useEffect(() => {
    async function getMeroCoins() {
      try {
        const coinResponse = await fetch(
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
                  {currencyFormat}
                  {Math.ceil(item.item.price_btc * 3068065.33).toLocaleString()}
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  {currencyFormat}
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
