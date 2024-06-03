import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from 'recharts';
import { format } from 'date-fns';

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickProps {
  data: StockData[];
}

const CandlestickChart: React.FC<CandlestickProps> = ({ data }) => {
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
          margin={{ top: 20, right: 20, left: 20, bottom: 50 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => format(new Date(date), 'MM/dd')}
            minTickGap={20}
            type="category"
            scale="band"
          />
          <YAxis domain={['auto', (dataMin) => dataMin - 10]} />
          <Tooltip
            labelFormatter={(label) => format(new Date(label), 'MMMM dd, yyyy')}
          />
          <Bar
            dataKey="low"
            fill="transparent"
            stroke="black"
            shape={(props) => {
              const { x, y, width, height, payload } = props;
              const barHeight = Math.abs(payload.open - payload.close);
              const yOpen = payload.open > payload.close ? y : y + height - barHeight;
              const color = payload.close > payload.open ? 'green' : 'red';
              const wickLength = 5; // Length of the wick in pixels

              return (
                <g>
                  {/* High line */}
                  <line
                    x1={x + width / 2}
                    x2={x + width / 2}
                    y1={Math.min(y, yOpen) - wickLength}
                    y2={Math.min(y, yOpen)}
                    stroke="black"
                  />
                  {/* Low line */}
                  <line
                    x1={x + width / 2}
                    x2={x + width / 2}
                    y1={Math.max(y, yOpen) + barHeight}
                    y2={Math.max(y, yOpen) + barHeight + wickLength}
                    stroke="black"
                  />
                  {/* Candlestick body */}
                  <rect
                    x={x}
                    y={Math.min(y, yOpen)}
                    width={width}
                    height={barHeight}
                    fill={color}
                  />
                  {/* Top wick */}
                  <line
                    x1={x + width / 2}
                    x2={x + width / 2}
                    y1={Math.min(y, yOpen)}
                    y2={Math.min(y, yOpen) - wickLength}
                    stroke={color}
                  />
                  {/* Bottom wick */}
                  <line
                    x1={x + width / 2}
                    x2={x + width / 2}
                    y1={Math.max(y, yOpen) + barHeight}
                    y2={Math.max(y, yOpen) + barHeight + wickLength}
                    stroke={color}
                  />
                </g>
              );
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandlestickChart;
