import React from 'react';

interface StockInfoProps {
  data: {
    analyst_estimates: { [key: string]: number };
    current_ratio: number;
    debt_to_equity_ratio: number;
    eps: number;
    market_ap: number;
    pb_ratio: number;
    pe_ratio: number;
    peg_ratio: number;
    ps_ratio: number;
    shares_outstanding: number;
  } | null; // Specify that data can be null
}

const StockInfo: React.FC<StockInfoProps> = ({ data }) => {
  if (!data) return <div>Loading...</div>; // Handle null data

  const { analyst_estimates, current_ratio, debt_to_equity_ratio, eps, market_ap, pb_ratio, pe_ratio, peg_ratio, ps_ratio, shares_outstanding } = data;

  return (
    <div>
      <h2>Key Ratios</h2>
      <ul>
        <li><strong>Market Cap:</strong> {market_ap}</li>
        <li><strong>Shares Outstanding:</strong> {shares_outstanding}</li>
        <li><strong>P/E Ratio:</strong> {pe_ratio}</li>
        <li><strong>P/S Ratio:</strong> {ps_ratio}</li>
        <li><strong>P/B Ratio:</strong> {pb_ratio}</li>
        <li><strong>PEG Ratio:</strong> {peg_ratio}</li>
        <li><strong>Current Ratio:</strong> {current_ratio}</li>
        <li><strong>Debt to Equity Ratio:</strong> {debt_to_equity_ratio}</li>
        <li><strong>EPS:</strong> {eps}</li>
      </ul>

      <h2>Analyst Estimates</h2>
      <ul>
        {Object.entries(analyst_estimates).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockInfo;