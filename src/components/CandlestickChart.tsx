import React, { useState, useEffect, useContext } from "react";
import {
  Chart as ChartJS,
  registerables,
  TimeScale,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  ChartData,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chartjs-adapter-date-fns";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";
import { StockData } from "../data/dummyData";
import { IntradayStockData } from "../data/dummyIntradayData";
import { format } from "date-fns";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext"; // Adjust the import path as necessary

ChartJS.register(
  ...registerables,
  annotationPlugin,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale
);

interface CandlestickChartProps {
  dailyData: StockData[];
  intradayData: IntradayStockData[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({
  dailyData,
  intradayData,
}) => {
  const [filteredData, setFilteredData] = useState<
    StockData[] | IntradayStockData[]
  >(intradayData);
  const [filter, setFilter] = useState("1D"); // Default filter to 1 Day
  const { darkMode } = useContext(ThemeContext); // Use the dark mode context

  const filterData = (interval: string) => {
    let filtered: StockData[] | IntradayStockData[] = [];
    switch (interval) {
      case "1D":
        filtered = intradayData;
        break;
      case "1W":
        filtered = dailyData.slice(-7); // Filter last 7 days
        break;
      case "1M":
        filtered = dailyData.slice(-30); // Filter last 30 days
        break;
      case "3M":
        filtered = dailyData.slice(-90); // Filter last 90 days
        break;
      case "5M":
        filtered = dailyData.slice(-150); // Filter last 150 days
        break;
      case "YTD":
        filtered = dailyData.filter(
          (item) =>
            new Date(item.date).getFullYear() === new Date().getFullYear()
        );
        break;

      case "1Y":
        filtered = dailyData.slice(-365); // Filter last 365 days
        break;
      default:
        filtered = dailyData;
    }
    setFilteredData(filtered);
  };

  const getTimeUnit = (filter: string) => {
    return filter === "1D" ? "minute" : "day";
  };

  const getStepSize = (filter: string) => {
    switch (filter) {
      case "1D":
        return 30; // 30 minutes
      case "1W":
        return 1; // 1 day
      case "1M":
        return 2; // 2 days
      case "3M":
        return 7; // 1 week
      case "5M":
        return 14; // 2 weeks
      case "YTD":
        return 30; // 1 month
      case "1Y":
        return 30; // 1 month
      default:
        return 1;
    }
  };

  const latestDataPoint =
    filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;
  const isPriceIncreasing =
    latestDataPoint !== null && latestDataPoint.close > latestDataPoint.open;

  const chartData: ChartData<"candlestick"> = {
    datasets: [
      {
        label: "Stock Price",
        data: filteredData.map((item) => ({
          x:
            "time" in item
              ? new Date(`${item.date}T${item.time}`).getTime()
              : new Date(item.date).getTime(),
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        })),
        borderColor: (context) => {
          const { dataset, dataIndex } = context;
          const value = dataset.data[dataIndex] as any;
          return value?.c > value?.o ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)"; // Fully opaque green and red colors
        },
        backgroundColor: (context) => {
          const { dataset, dataIndex } = context;
          const value = dataset.data[dataIndex] as any;
          return value?.c > value?.o ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)"; // Fully opaque green and red colors
        },
      },
    ],
  };
  const timeUnit = getTimeUnit(filter);

  const chartOptions: ChartOptions<"candlestick"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: timeUnit,
          tooltipFormat: filter === "1D" ? "MMM d, yyyy HH:mm" : "MMM d, yyyy",
          displayFormats: {
            minute: "HH:mm",
            hour: "HH:mm",
            day: "MMM d",
            week: "MMM d",
            month: "MMM yyyy",
            quarter: "MMM yyyy",
            year: "yyyy",
          },
          minUnit: "minute",
        },
        grid: {
          color: darkMode ? "#444" : "#EDEDED", // Dark mode grid line color
        },
        ticks: {
          autoSkip: true,
          color: darkMode ? "#fff" : "#000", // Change tick color based on dark mode
          maxTicksLimit: filter === "1D" ? 12 : 10, // Adjusted limit for intraday
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: darkMode ? "#444" : "#EDEDED", // Dark mode grid line color
        },
        ticks: {
          color: darkMode ? "#fff" : "#000", // Change tick color based on dark mode
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw as any;
            const date = format(
              new Date(dataPoint.x),
              filter === "1D" ? "MMM d, yyyy HH:mm" : "MMM d, yyyy"
            );
            return `Date: ${date}\nOpen: ${dataPoint.o}\nHigh: ${dataPoint.h}\nLow: ${dataPoint.l}\nClose: ${dataPoint.c}`;
          },
        },
      },
      annotation: {
        annotations: {
          latestPriceLine: latestDataPoint
            ? {
                type: "line",
                yMin: latestDataPoint.close,
                yMax: latestDataPoint.close,
                borderColor: isPriceIncreasing
                  ? "rgb(0, 255, 0)"
                  : "rgb(255, 0, 0)",
                borderWidth: 2,
                borderDash: [5, 5], // Make the line dotted
              }
            : undefined,
        },
      },
    },
  };

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {["1D", "1W", "1M", "3M", "5M", "YTD", "1Y"].map((interval) => (
          <ChartFilter
            key={interval}
            text={interval}
            active={filter === interval}
            onClick={() => {
              filterData(interval);
              return setFilter(interval);
            }}
          />
        ))}
      </div>

      <div style={{ height: "40rem", width: "100%" }}>
        {filteredData.length > 0 ? (
          <Chart type="candlestick" data={chartData} options={chartOptions} />
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default CandlestickChart;
