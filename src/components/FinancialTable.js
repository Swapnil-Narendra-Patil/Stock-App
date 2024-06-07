import React, { useEffect, useState, useContext } from "react";
import { fetchFinancialData } from "../services/api.tsx"; // Adjust the import path if necessary
import ThemeContext from "../context/ThemeContext";

const FinancialTable = () => {
  const { darkMode } = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const financialData = await fetchFinancialData();
        setData(financialData);
      } catch (error) {
        console.error("Error fetching financial data:", error);
      }
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    analyst_estimates,
    current_ratio,
    debt_to_equity_ratio,
    eps,
    market_ap,
    pb_ratio,
    pe_ratio,
    peg_ratio,
    ps_ratio,
    shares_outstanding,
    news, // Add news data here
  } = data;

  // Additional analysts and their estimates
  const additional_analysts = {
    BofA: 8.1,
    Citibank: 7.0,
    Moelis: 6.3,
    Lazard: 7.5,
    Evercore: 8.7,
  };

  // Merge the analyst estimates
  const merged_analyst_estimates = {
    ...analyst_estimates,
    ...additional_analysts,
  };

  return (
    <div className="p-2 overflow-auto">
      <h2
        className={`text-lg font-bold mb-2 ${
          darkMode ? "text-gray-100" : "text-black"
        }`}
      >
        Key Ratios
      </h2>
      <table
        className={`w-full ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        } border`}
      >
        <thead>
          <tr>
            <th
              className={`px-1 py-1 border-b ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Ratio
            </th>
            <th
              className={`px-1 py-1 border-b ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <td className="px-1 py-1 border-b">Market Cap</td>
            <td className="px-1 py-1 border-b">{market_ap}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <td className="px-1 py-1 border-b">Shares Outstanding</td>
            <td className="px-1 py-1 border-b">{shares_outstanding}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <td className="px-1 py-1 border-b">P/E Ratio</td>
            <td className="px-1 py-1 border-b">{pe_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <td className="px-1 py-1 border-b">P/S Ratio</td>
            <td className="px-1 py-1 border-b">{ps_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <td className="px-1 py-1 border-b">P/B Ratio</td>
            <td className="px-1 py-1 border-b">{pb_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <td className="px-1 py-1 border-b">PEG Ratio</td>
            <td className="px-1 py-1 border-b">{peg_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <td className="px-1 py-1 border-b">Current Ratio</td>
            <td className="px-1 py-1 border-b">{current_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <td className="px-1 py-1 border-b">Debt to Equity Ratio</td>
            <td className="px-1 py-1 border-b">{debt_to_equity_ratio}</td>
          </tr>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <td className="px-1 py-1 border-b">EPS</td>
            <td className="px-1 py-1 border-b">{eps}</td>
          </tr>
        </tbody>
      </table>

      <h2
        className={`text-lg font-bold mt-4 mb-2 ${
          darkMode ? "text-gray-100" : "text-black"
        }`}
      >
        Analyst Estimates
      </h2>
      <table
        className={`w-full ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        } border`}
      >
        <thead>
          <tr>
            <th
              className={`px-1 py-1 border-b ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Analyst
            </th>
            <th
              className={`px-1 py-1 border-b ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Estimate
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(merged_analyst_estimates).map(
            ([key, value], index) => (
              <tr
                key={key}
                className={
                  index % 2 === 0
                    ? `${darkMode ? "bg-gray-700" : "bg-gray-50"}`
                    : `${darkMode ? "bg-gray-800" : "bg-white"}`
                }
              >
                <td className="px-1 py-1 border-b">{key}</td>
                <td className="px-1 py-1 border-b">{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {news && Object.keys(news).length > 0 && (
        <>
          <h2
            className={`text-lg font-bold mt-4 mb-2 ${
              darkMode ? "text-gray-100" : "text-black"
            }`}
          >
            News
          </h2>
          <div className="flex flex-wrap">
            {Object.entries(news).map(([key, article], index) => (
              <div
                key={key}
                className={`w-full md:w-1/2 xl:w-1/3 p-2 ${
                  index % 2 === 0
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-50"
                    : darkMode
                    ? "bg-gray-800"
                    : "bg-white"
                } border-2 rounded-md mb-4`}
              >
                <h3 className="text-md font-semibold">{`Article ${
                  index + 1
                }`}</h3>
                <p className="text-sm">{article.summary}</p>
                <p
                  className={`text-sm ${
                    article.sentiment.value === "positive"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Sentiment: {article.sentiment.value} (Score:{" "}
                  {article.sentiment.score})
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FinancialTable;
