import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
const HistoricalData = ({ coin }) => {
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
  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=${days}`
    );
    setflag(true);
    setHistoricData(data.prices);
  };
  useEffect(() => {
    fetchHistoricData();
  }, [days]);
  return (
    <div>
      <h3 style={{ color: "white" }}>HistoricalData Chart</h3>
      {!historicData | (flag === false) ? (
        <h3>Loading Data....</h3>
      ) : (
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
                    data: historicData.map(
                      (coin) => coin[1]
                    ),
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
