import React from 'react';

const FinancialTable = ({ data }) => {
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
  } = data;

  return (
    <div className="p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Key Ratios</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Ratio</th>
            <th className="px-4 py-2 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Market Cap</td>
            <td className="px-4 py-2 border-b">{market_ap}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border-b">Shares Outstanding</td>
            <td className="px-4 py-2 border-b">{shares_outstanding}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">P/E Ratio</td>
            <td className="px-4 py-2 border-b">{pe_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border-b">P/S Ratio</td>
            <td className="px-4 py-2 border-b">{ps_ratio}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">P/B Ratio</td>
            <td className="px-4 py-2 border-b">{pb_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border-b">PEG Ratio</td>
            <td className="px-4 py-2 border-b">{peg_ratio}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Current Ratio</td>
            <td className="px-4 py-2 border-b">{current_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border-b">Debt to Equity Ratio</td>
            <td className="px-4 py-2 border-b">{debt_to_equity_ratio}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">EPS</td>
            <td className="px-4 py-2 border-b">{eps}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">Analyst Estimates</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Analyst</th>
            <th className="px-4 py-2 border-b">Estimate</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(analyst_estimates).map(([key, value], index) => (
            <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2 border-b">{key}</td>
              <td className="px-4 py-2 border-b">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
