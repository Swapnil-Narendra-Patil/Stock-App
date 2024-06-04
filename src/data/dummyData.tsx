import { format } from 'date-fns';

export interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const generateDummyData = (numPoints: number): StockData[] => {
  const data: StockData[] = [];
  let date = new Date();
  
  let open = 150;
  let close = open;

  for (let i = 0; i < numPoints; i++) {
    const change = (Math.random() - 0.5) * 5;
    open = close;
    close = open + change;
    const high = Math.max(open, close) + (Math.random() * 2);
    const low = Math.min(open, close) - (Math.random() * 2);
    const volume = Math.floor(Math.random() * 20000000) + 5000000;

    data.push({ 
      date: format(date, 'yyyy-MM-dd'), 
      open: parseFloat(open.toFixed(2)), 
      high: parseFloat(high.toFixed(2)), 
      low: parseFloat(low.toFixed(2)), 
      close: parseFloat(close.toFixed(2)), 
      volume 
    });

    date.setDate(date.getDate() - 1);
  }

  return data.reverse();
};

export const dummyData: StockData[] = generateDummyData(365);
