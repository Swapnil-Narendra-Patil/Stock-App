// src/data/dummyData.ts

export interface StockData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

export const generateDummyData = (numPoints: number): StockData[] => {
  const data: StockData[] = [];
  let date = new Date();
  for (let i = 0; i < numPoints; i++) {
    const open = Math.random() * 100 + 100;
    const high = open + Math.random() * 50;
    const low = open - Math.random() * 50;
    const close = low + Math.random() * (high - low);
    data.push({ date: new Date(date), open, high, low, close });
    date.setDate(date.getDate() - 1); // Decrement date for historical data
  }
  return data;
};

export const dummyData: StockData[] = generateDummyData(365); // Generate 365 points of dummy data (1 year)
