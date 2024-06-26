import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import FinancialTable from "./FinancialTable";
import { fetchFinancialData } from "../services/api.tsx";
import CandlestickChart from "./CandlestickChart.tsx";
import Header from "./Header.js";
import Overview from "./Overview.js";
import ErrorBoundary from "./ErrorBoundry.tsx";
import ThemeContext from "../context/ThemeContext";
import { mockCompanyDetails } from "../constants/mock.js";
import { dummyData } from "../data/dummyData.tsx";
import { dummyIntradayData } from "../data/dummyIntradayData.tsx";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const getData = async () => {
      console.log("Here!");
      const result = await fetchFinancialData();
      console.log(result);

      setData(result);
    };

    getData();
  }, []);

  // Calculate the latest stock price, change, and change percent
  const latestPrice = dummyData[dummyData.length - 1]?.close || 0;
  const previousPrice = dummyData[dummyData.length - 2]?.close || 0;
  const change = latestPrice - previousPrice;
  const changePercent = previousPrice ? (change / previousPrice) * 100 : 0;

  if (!data) return <div>Loading...</div>;

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-5 px-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="md:col-span-2 xl:col-span-2 row-span-5 overflow-hidden">
        <Card>
          <ErrorBoundary>
            <CandlestickChart
              dailyData={dummyData}
              intradayData={dummyIntradayData}
            />
          </ErrorBoundary>
        </Card>
      </div>
      <div>
        <ErrorBoundary>
          <Overview
            symbol={mockCompanyDetails.ticker}
            price={latestPrice.toFixed(2)}
            change={change.toFixed(2)}
            changePercent={changePercent.toFixed(2)}
            currency={"USD"}
          />
        </ErrorBoundary>
      </div>
      <div className="md:col-span-1 xl:col-span-1 row-span-4 overflow-auto">
        <Card>
          <ErrorBoundary>
            <FinancialTable data={data} />
          </ErrorBoundary>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
