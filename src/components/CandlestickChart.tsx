// src/components/Candlestick.tsx

import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Line,
  Cell,
} from 'recharts';
import { StockData } from '../data/dummyData';
import { format } from 'date-fns';

interface CandlestickProps {
  data: StockData[];
}

const Candlestick: React.FC<CandlestickProps> = ({ data }) => {
  const [range, setRange] = useState('6M');

  const filterData = () => {
    const now = new Date();
    let filteredData = data;
    switch (range) {
      case '1D':
        filteredData = data.slice(-1);
        break;
      case '1W':
        filteredData = data.slice(-7);
        break;
      case '1M':
        filteredData = data.slice(-30);
        break;
      case '3M':
        filteredData = data.slice(-90);
        break;
      case '6M':
        filteredData = data.slice(-180);
        break;
      case 'YTD':
        filteredData = data.filter(item => new Date(item.date).getFullYear() === now.getFullYear());
        break;
      case '1Y':
        filteredData = data.slice(-365);
        break;
      default:
        break;
    }
    return filteredData;
  };

  const filteredData = filterData();

  return (
    <div>
      <div className="flex justify-around mb-4">
        {['1D', '1W', '1M', '3M', '6M', 'YTD', '1Y'].map(r => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-4 py-2 ${range === r ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {r}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={filteredData}
          margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => format(new Date(date), 'MM/dd')}
            minTickGap={20}
          />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip
            labelFormatter={(label) => format(new Date(label), 'MMMM dd, yyyy')}
          />
          <Bar dataKey="open" fill="#8884d8" isAnimationActive={false}>
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.close > entry.open ? 'green' : 'red'} />
            ))}
          </Bar>
          <Line type="monotone" dataKey="high" stroke="#413ea0" dot={false} />
          <Line type="monotone" dataKey="low" stroke="#ff7300" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Candlestick;
