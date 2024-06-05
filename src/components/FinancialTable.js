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

  // Additional analysts and their estimates
  const additional_analysts = {
    'BofA': 8.1,
    'Citibank': 7.0,
    'Moelis': 6.3,
    'Lazard': 7.5,
    'Evercore': 8.7
  };

  // Merge the analyst estimates
  const merged_analyst_estimates = { ...analyst_estimates, ...additional_analysts };

  return (
    <div className="p-2 overflow-auto">
      <h2 className="text-lg font-bold mb-2">Key Ratios</h2>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-1 py-1 border-b">Ratio</th>
            <th className="px-1 py-1 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-1 py-1 border-b">Market Cap</td>
            <td className="px-1 py-1 border-b">{market_ap}</td>
          </tr>
          <tr>
            <td className="px-1 py-1 border-b">Shares Outstanding</td>
            <td className="px-1 py-1 border-b">{shares_outstanding}</td>
          </tr>
          <tr>
            <td className="px-1 py-1 border-b">P/E Ratio</td>
            <td className="px-1 py-1 border-b">{pe_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-1 py-1 border-b">P/S Ratio</td>
            <td className="px-1 py-1 border-b">{ps_ratio}</td>
          </tr>
          <tr>
            <td className="px-1 py-1 border-b">P/B Ratio</td>
            <td className="px-1 py-1 border-b">{pb_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-1 py-1 border-b">PEG Ratio</td>
            <td className="px-1 py-1 border-b">{peg_ratio}</td>
          </tr>
          <tr>
            <td className="px-1 py-1 border-b">Current Ratio</td>
            <td className="px-1 py-1 border-b">{current_ratio}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-1 py-1 border-b">Debt to Equity Ratio</td>
            <td className="px-1 py-1 border-b">{debt_to_equity_ratio}</td>
          </tr>
          <tr>
            <td className="px-1 py-1 border-b">EPS</td>
            <td className="px-1 py-1 border-b">{eps}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-lg font-bold mt-4 mb-2">Analyst Estimates</h2>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-1 py-1 border-b">Analyst</th>
            <th className="px-1 py-1 border-b">Estimate</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(merged_analyst_estimates).map(([key, value], index) => (
            <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-1 py-1 border-b">{key}</td>
              <td className="px-1 py-1 border-b">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
