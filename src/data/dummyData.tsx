import { format, subDays } from 'date-fns';

export interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const generateDummyData = (numPoints: number, endDate: Date): StockData[] => {
  const data: StockData[] = [];
  let date = endDate;
  
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

    date = subDays(date, 1);
  }

  return data.reverse();
};

const endDate = new Date('2024-05-02');
export const dummyData: StockData[] = generateDummyData(365, endDate);
