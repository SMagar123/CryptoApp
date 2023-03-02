import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/historical.css";
import { Loader } from "rsuite";
const HistoricalData = (props) => {
  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    async function fetchHistoricData() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${props.coin.id}/market_chart?vs_currency=USD&days=${days}`
        );
        const data = await response.json();
        setflag(true);
        setHistoricData(data.prices);
      } catch (e) {
        console.error(e);
      }
    }
    fetchHistoricData();
  }, [props.coin.id, days]);
  return (
    <div>
      <h2 style={{ color: "rgb(188, 13, 71)" }}>Historical Data Chart</h2>
      {!historicData | (flag === false) ? (
        <Loader size="lg" content="Loading..." />
      ) : (
        // <Loader />
        <>
          <div className="Chart_Display">
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in USD`,
                    borderColor: "#8a0707",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </div>
          <div className="daysButton">
            {chartDays.map((day) => (
              <button
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricalData;
