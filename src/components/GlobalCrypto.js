import React, { useEffect, useState } from "react";
import "../styles/globalcrypto.css";
const GlobalCrypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [cryptoFinding, setCryptoFinding] = useState("");
  useEffect(() => {
    async function getGlobalCoins() {
      try {
        const dataResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
        );
        const data = await dataResponse.json();
        setCrypto(data);
      } catch (e) {
        console.log(e);
      }
    }
    getGlobalCoins();
  }, []);
  const tableHeading = [
    "Coin",
    "Price",
    "24h Change",
    "Total Volume",
    "Market Cap",
  ];
  const searchCrypto = () => {
    return crypto.filter((item) => {
      return (
        item.id.toLowerCase().includes(cryptoFinding) ||
        item.symbol.toLowerCase().includes(cryptoFinding)
      );
    });
  };
  return (
    <div className="globalCryptoDivWrapper">
      <div className="globalCryptoTitle">
        <h1>Cryptocurrency Global Data by Market Cap</h1>
      </div>
      <div className="cryptoSearch">
        <input
          type="text"
          placeholder="Search Crypto by name..."
          onChange={(e) => setCryptoFinding(e.target.value)}
        />
      </div>
      <div className="cryptoData">
        <table>
          <thead>
            <tr>
              {tableHeading.map((theadTitle) => {
                return <th>{theadTitle}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {searchCrypto().map((coinItem) => {
              return (
                <>
                  <tr>
                    <td style={{ padding: "1em" }}>
                      <div
                        className="coinsFigure"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <img src={coinItem.image} alt="COINimages" />
                        <span style={{ fontWeight: "bold" }}>
                          {coinItem.symbol.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td>
                      Rs.{(coinItem.current_price * 1.6).toLocaleString()}
                    </td>
                    <td>{coinItem.price_change_percentage_24h}%</td>
                    <td>{coinItem.total_volume.toLocaleString()}</td>
                    <td>Rs.{(coinItem.market_cap * 1.6).toLocaleString()}M</td>
                  </tr>
                  <hr width="600%" />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlobalCrypto;
