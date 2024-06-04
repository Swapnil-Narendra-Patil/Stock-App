import React, { useState, useEffect } from 'react';
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
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import { StockData } from '../data/dummyData';
import { IntradayStockData } from '../data/dummyIntradayData';
import { format } from 'date-fns';

ChartJS.register(
  ...registerables,
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

const CandlestickChart: React.FC<CandlestickChartProps> = ({ dailyData, intradayData }) => {
  const [filteredData, setFilteredData] = useState<StockData[] | IntradayStockData[]>([]);
  const [filter, setFilter] = useState('1D'); // Default filter to 1 Day

  useEffect(() => {
    filterData(filter);
  }, [filter, dailyData, intradayData]);

  const filterData = (interval: string) => {
    let filtered: StockData[] | IntradayStockData[] = [];
    switch (interval) {
      case '1D':
        filtered = intradayData;
        break;
      case '1W':
        filtered = dailyData.slice(-7); // Filter last 7 days
        break;
      case '1M':
        filtered = dailyData.slice(-30); // Filter last 30 days
        break;
      case '3M':
        filtered = dailyData.slice(-90); // Filter last 90 days
        break;
      case '5M':
        filtered = dailyData.slice(-150); // Filter last 150 days
        break;
      case 'YTD':
        filtered = dailyData.filter(item => new Date(item.date).getFullYear() === new Date().getFullYear());
        break;
      case '1Y':
        filtered = dailyData.slice(-365); // Filter last 365 days
        break;
      default:
        filtered = dailyData;
    }
    console.log(`Filtered Data for ${interval}:`, filtered);
    setFilteredData(filtered);
  };

  const getTimeUnit = (filter: string) => {
    return filter === '1D' ? 'minute' : 'day';
  };

  const chartData: ChartData<'candlestick'> = {
    datasets: [
      {
        label: 'Stock Price',
        data: filteredData.map(item => ({
          x: 'time' in item ? new Date(`${item.date}T${item.time}`).getTime() : new Date(item.date).getTime(),
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        })),
        borderColor: (context) => {
          const { dataset, dataIndex } = context;
          const value = dataset.data[dataIndex] as any;
          return value?.c > value?.o ? '#00ff00' : '#ff0000';
        },
        backgroundColor: (context) => {
          const { dataset, dataIndex } = context;
          const value = dataset.data[dataIndex] as any;
          return value?.c > value?.o ? '#00ff00' : '#ff0000';
        },
      },
    ],
  };

  const chartOptions: ChartOptions<'candlestick'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: getTimeUnit(filter),
          tooltipFormat: filter === '1D' ? 'MMM d, yyyy HH:mm' : 'MMM d, yyyy',
          displayFormats: {
            minute: 'HH:mm',
            hour: 'HH:mm',
            day: 'MMM d',
            week: 'MMM d',
            month: 'MMM yyyy',
            quarter: 'MMM yyyy',
            year: 'yyyy',
          },
          minUnit: 'minute',
        },
        grid: {
          color: '#EDEDED',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: filter === '1D' ? 12 : 10, // Adjusted limit for intraday
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#EDEDED',
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
            const date = format(new Date(dataPoint.x), filter === '1D' ? 'MMM d, yyyy HH:mm' : 'MMM d, yyyy');
            return `Date: ${date}\nOpen: ${dataPoint.o}\nHigh: ${dataPoint.h}\nLow: ${dataPoint.l}\nClose: ${dataPoint.c}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setFilter('1D')}
          className={`px-2 py-1 rounded ${filter === '1D' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          1 Day
        </button>
        <button
          onClick={() => setFilter('1W')}
          className={`px-2 py-1 rounded ${filter === '1W' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          1 Week
        </button>
        <button
          onClick={() => setFilter('1M')}
          className={`px-2 py-1 rounded ${filter === '1M' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          1 Month
        </button>
        <button
          onClick={() => setFilter('3M')}
          className={`px-2 py-1 rounded ${filter === '3M' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          3 Months
        </button>
        <button
          onClick={() => setFilter('5M')}
          className={`px-2 py-1 rounded ${filter === '5M' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          5 Months
        </button>
        <button
          onClick={() => setFilter('YTD')}
          className={`px-2 py-1 rounded ${filter === 'YTD' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          YTD
        </button>
        <button
          onClick={() => setFilter('1Y')}
          className={`px-2 py-1 rounded ${filter === '1Y' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          1 Year
        </button>
      </div>

      <div style={{ height: '40rem', width: '100%' }}>
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
