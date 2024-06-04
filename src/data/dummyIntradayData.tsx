import { format } from 'date-fns';

export interface IntradayStockData {
  date: string;
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const generateIntradayData = (date: string): IntradayStockData[] => {
  const data: IntradayStockData[] = [];
  let time = new Date(`${date}T09:00:00`); // Start at 9 AM
  let open = 150; // Starting price
  let close = open;

  while (time.getHours() < 17) { // Until 5 PM
    const change = (Math.random() - 0.5) * 2; // Change between -1 and 1
    open = close;
    close = open + change;
    const high = Math.max(open, close) + (Math.random() * 1); // High is max of open/close + random
    const low = Math.min(open, close) - (Math.random() * 1); // Low is min of open/close - random
    const volume = Math.floor(Math.random() * 10000) + 1000; // Volume between 1K and 11K

    data.push({
      date,
      time: format(time, 'HH:mm'),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume,
    });

    time.setMinutes(time.getMinutes() + 5); // Increment by 5 minutes
  }

  return data;
};

export const dummyIntradayData: IntradayStockData[] = generateIntradayData('2024-05-02'); // Generate intraday data for a specific date
