// src/components/StockPriceTable.tsx
import React from 'react';

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const StockPriceTable: React.FC<{ data: StockData[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Stock Price Data</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Open</th>
            <th className="px-4 py-2 border-b">High</th>
            <th className="px-4 py-2 border-b">Low</th>
            <th className="px-4 py-2 border-b">Close</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2 border-b">{item.date}</td>
              <td className="px-4 py-2 border-b">{item.open}</td>
              <td className="px-4 py-2 border-b">{item.high}</td>
              <td className="px-4 py-2 border-b">{item.low}</td>
              <td className="px-4 py-2 border-b">{item.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockPriceTable;
