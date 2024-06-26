// src/data/dummyIntradayData.ts

export interface IntradayStockData {
  date: string;
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const dummyIntradayData: IntradayStockData[] = [
  { date: '2024-04-30', time: '09:00', open: 150, high: 150.24, low: 148.96, close: 149.65, volume: 100000 },
  { date: '2024-04-30', time: '09:05', open: 149.65, high: 150.24, low: 148, close: 148.87, volume: 150000 },
  { date: '2024-04-30', time: '09:10', open: 148.87, high: 149.63, low: 147.99, close: 148.82, volume: 200000 },
  { date: '2024-04-30', time: '09:15', open: 148.82, high: 149.5, low: 147.06, close: 147.93, volume: 250000 },
  { date: '2024-04-30', time: '09:20', open: 147.93, high: 148.36, low: 146.85, close: 147.15, volume: 300000 },
  { date: '2024-04-30', time: '09:25', open: 147.15, high: 147.94, low: 147.04, close: 147.27, volume: 350000 },
  { date: '2024-04-30', time: '09:30', open: 147.27, high: 147.74, low: 146.81, close: 147.73, volume: 400000 },
  { date: '2024-04-30', time: '09:35', open: 147.73, high: 149.07, low: 147.67, close: 148.2, volume: 450000 },
  { date: '2024-04-30', time: '09:40', open: 148.2, high: 148.73, low: 147.73, close: 148.55, volume: 500000 },
  { date: '2024-04-30', time: '09:45', open: 148.55, high: 149.73, low: 148.26, close: 149.27, volume: 550000 },
  { date: '2024-04-30', time: '09:50', open: 149.27, high: 149.76, low: 148.89, close: 149.74, volume: 600000 },
  { date: '2024-04-30', time: '09:55', open: 149.74, high: 149.96, low: 148.53, close: 149.27, volume: 650000 },
  { date: '2024-04-30', time: '10:00', open: 149.27, high: 151.2, low: 148.56, close: 150.25, volume: 700000 },
  { date: '2024-04-30', time: '10:05', open: 150.25, high: 150.67, low: 148.63, close: 149.62, volume: 750000 },
  { date: '2024-04-30', time: '10:10', open: 149.62, high: 149.66, low: 148.28, close: 148.67, volume: 800000 },
  { date: '2024-04-30', time: '10:15', open: 148.67, high: 149.14, low: 147.19, close: 148.16, volume: 850000 },
  { date: '2024-04-30', time: '10:20', open: 148.16, high: 148.88, low: 147.65, close: 147.75, volume: 900000 },
  { date: '2024-04-30', time: '10:25', open: 147.75, high: 148.64, low: 147.47, close: 147.54, volume: 950000 },
  { date: '2024-04-30', time: '10:30', open: 147.54, high: 148.17, low: 147.53, close: 148.12, volume: 1000000 },
  { date: '2024-04-30', time: '10:35', open: 148.12, high: 149.68, low: 148.03, close: 148.9, volume: 1050000 },
  { date: '2024-04-30', time: '10:40', open: 148.9, high: 149.86, low: 148.59, close: 148.83, volume: 1100000 },
  { date: '2024-04-30', time: '10:45', open: 148.83, high: 149.78, low: 148.01, close: 148.38, volume: 1150000 },
  { date: '2024-04-30', time: '10:50', open: 148.38, high: 149.39, low: 147.93, close: 148.56, volume: 1200000 },
  { date: '2024-04-30', time: '10:55', open: 148.56, high: 149.66, low: 148.21, close: 149.04, volume: 1250000 },
  { date: '2024-04-30', time: '11:00', open: 149.04, high: 149.67, low: 147.95, close: 148.83, volume: 1300000 },
  { date: '2024-04-30', time: '11:05', open: 148.83, high: 149.22, low: 148.57, close: 149.02, volume: 1350000 },
  { date: '2024-04-30', time: '11:10', open: 149.02, high: 149.46, low: 148.41, close: 149.13, volume: 1400000 },
  { date: '2024-04-30', time: '11:15', open: 149.13, high: 150.08, low: 147.52, close: 148.32, volume: 1450000 },
  { date: '2024-04-30', time: '11:20', open: 148.32, high: 148.35, low: 147.3, close: 147.72, volume: 1500000 },
  { date: '2024-04-30', time: '11:25', open: 147.72, high: 148.68, low: 147.41, close: 148.3, volume: 1550000 },
  { date: '2024-04-30', time: '11:30', open: 148.3, high: 149.49, low: 147.83, close: 148.61, volume: 1600000 },
  { date: '2024-04-30', time: '11:35', open: 148.61, high: 149.1, low: 148.3, close: 148.78, volume: 1650000 },
  { date: '2024-04-30', time: '11:40', open: 148.78, high: 149.71, low: 148.41, close: 149.28, volume: 1700000 },
  { date: '2024-04-30', time: '11:45', open: 149.28, high: 150.36, low: 149.21, close: 149.56, volume: 1750000 },
  { date: '2024-04-30', time: '11:50', open: 149.56, high: 150.07, low: 149.2, close: 149.63, volume: 1800000 },
  { date: '2024-04-30', time: '11:55', open: 149.63, high: 150.47, low: 149.18, close: 150.04, volume: 1850000 },
  { date: '2024-04-30', time: '12:00', open: 150.04, high: 150.93, low: 149.95, close: 150.07, volume: 1850000 },
  { date: '2024-04-30', time: '12:05', open: 150.07, high: 151.34, low: 149.97, close: 150.46, volume: 1900000 },
  { date: '2024-04-30', time: '12:10', open: 150.46, high: 151.14, low: 149.35, close: 149.99, volume: 1950000 },
  { date: '2024-04-30', time: '12:15', open: 149.99, high: 150.11, low: 148.63, close: 149.05, volume: 2000000 },
  { date: '2024-04-30', time: '12:20', open: 149.05, high: 149.63, low: 148.49, close: 148.91, volume: 2050000 },
  { date: '2024-04-30', time: '12:25', open: 148.91, high: 149.95, low: 148.24, close: 149.78, volume: 2100000 },
  { date: '2024-04-30', time: '12:30', open: 149.78, high: 150.07, low: 148.27, close: 149.27, volume: 2150000 },
  { date: '2024-04-30', time: '12:35', open: 149.27, high: 149.54, low: 147.89, close: 148.31, volume: 2200000 },
  { date: '2024-04-30', time: '12:40', open: 148.31, high: 148.73, low: 147.24, close: 147.9, volume: 2250000 },
  { date: '2024-04-30', time: '12:45', open: 147.9, high: 148.12, low: 147.85, close: 148.04, volume: 2300000 },
  { date: '2024-04-30', time: '12:50', open: 148.04, high: 148.12, low: 146.3, close: 147.04, volume: 2350000 },
  { date: '2024-04-30', time: '12:55', open: 147.04, high: 148.3, low: 146.22, close: 147.71, volume: 2400000 },
  { date: '2024-04-30', time: '13:00', open: 147.71, high: 148.66, low: 146.68, close: 147.4, volume: 2450000 },
  { date: '2024-04-30', time: '13:05', open: 147.4, high: 147.94, low: 147.06, close: 147.67, volume: 2500000 },
  { date: '2024-04-30', time: '13:10', open: 147.67, high: 148.14, low: 147.12, close: 148.05, volume: 2550000 },
  { date: '2024-04-30', time: '13:15', open: 148.05, high: 148.7, low: 147.18, close: 147.52, volume: 2600000 },
  { date: '2024-04-30', time: '13:20', open: 147.52, high: 149.15, low: 146.6, close: 148.38, volume: 2650000 },
  { date: '2024-04-30', time: '13:25', open: 148.38, high: 149.81, low: 148.17, close: 149.28, volume: 2700000 },
  { date: '2024-04-30', time: '13:30', open: 149.28, high: 149.7, low: 149.23, close: 149.23, volume: 2750000 },
  { date: '2024-04-30', time: '13:35', open: 149.23, high: 150.5, low: 149.04, close: 149.97, volume: 2800000 },
  { date: '2024-04-30', time: '13:40', open: 149.97, high: 150.69, low: 149.42, close: 149.77, volume: 2850000 },
  { date: '2024-04-30', time: '13:45', open: 149.77, high: 151.03, low: 148.9, close: 150.34, volume: 2900000 },
  { date: '2024-04-30', time: '13:50', open: 150.34, high: 150.96, low: 149.25, close: 150.14, volume: 2950000 },
  { date: '2024-04-30', time: '13:55', open: 150.14, high: 151.39, low: 150.04, close: 150.62, volume: 3000000 },
  { date: '2024-04-30', time: '14:00', open: 150.62, high: 152.22, low: 150.5, close: 151.56, volume: 3050000 },
  { date: '2024-04-30', time: '14:05', open: 151.56, high: 151.63, low: 150.81, close: 151.11, volume: 3100000 },
  { date: '2024-04-30', time: '14:10', open: 151.11, high: 151.17, low: 150.08, close: 150.86, volume: 3150000 },
  { date: '2024-04-30', time: '14:15', open: 150.86, high: 151.5, low: 149.4, close: 150.31, volume: 3200000 },
  { date: '2024-04-30', time: '14:20', open: 150.31, high: 150.57, low: 149.29, close: 149.32, volume: 3250000 },
  { date: '2024-04-30', time: '14:25', open: 149.32, high: 150.54, low: 148.71, close: 150.05, volume: 3300000 },
  { date: '2024-04-30', time: '14:30', open: 150.05, high: 151.36, low: 149.37, close: 150.44, volume: 3350000 },
  { date: '2024-04-30', time: '14:35', open: 150.44, high: 151.5, low: 150.36, close: 150.89, volume: 3400000 },
  { date: '2024-04-30', time: '14:40', open: 150.89, high: 151.5, low: 149.96, close: 150.5, volume: 3450000 },
  { date: '2024-04-30', time: '14:45', open: 150.5, high: 150.65, low: 149.17, close: 150.09, volume: 3500000 },
  { date: '2024-04-30', time: '14:50', open: 150.09, high: 150.92, low: 149.26, close: 149.57, volume: 3550000 },
  { date: '2024-04-30', time: '14:55', open: 149.57, high: 150.62, low: 149.12, close: 150, volume: 3600000 },
  { date: '2024-04-30', time: '15:00', open: 150, high: 150.88, low: 149.05, close: 150.44, volume: 3650000 },
  { date: '2024-04-30', time: '15:05', open: 150.44, high: 152.07, low: 150.26, close: 151.36, volume: 3700000 },
  { date: '2024-04-30', time: '15:10', open: 151.36, high: 152.07, low: 150.48, close: 151.75, volume: 3750000 },
  { date: '2024-04-30', time: '15:15', open: 151.75, high: 152.94, low: 151.54, close: 152.67, volume: 3800000 },
  { date: '2024-04-30', time: '15:20', open: 152.67, high: 153.71, low: 152.07, close: 153.39, volume: 3850000 },
  { date: '2024-04-30', time: '15:25', open: 153.39, high: 154.57, low: 152.55, close: 153.95, volume: 3900000 },
  { date: '2024-04-30', time: '15:30', open: 153.95, high: 154.86, low: 152.33, close: 153.2, volume: 3950000 },
  { date: '2024-04-30', time: '15:35', open: 153.2, high: 153.87, low: 152.77, close: 153.44, volume: 4000000 },
  { date: '2024-04-30', time: '15:40', open: 153.44, high: 153.79, low: 153.4, close: 153.58, volume: 4050000 },
  { date: '2024-04-30', time: '15:45', open: 153.58, high: 154.73, low: 153.35, close: 154.33, volume: 4100000 },
  { date: '2024-04-30', time: '15:50', open: 154.33, high: 155.18, low: 153.37, close: 154.35, volume: 4150000 },
  { date: '2024-04-30', time: '15:55', open: 154.35, high: 155.19, low: 153.55, close: 153.77, volume: 4200000 },
  { date: '2024-04-30', time: '16:00', open: 153.77, high: 155.14, low: 153.12, close: 154.57, volume: 4250000 },
  { date: '2024-04-30', time: '16:05', open: 154.57, high: 155.85, low: 153.77, close: 155.42, volume: 4300000 },
  { date: '2024-04-30', time: '16:10', open: 155.42, high: 155.47, low: 154.72, close: 155.42, volume: 4350000 },
  { date: '2024-04-30', time: '16:15', open: 155.42, high: 155.45, low: 154.69, close: 155.29, volume: 4400000 },
  { date: '2024-04-30', time: '16:20', open: 155.29, high: 155.36, low: 153.93, close: 154.67, volume: 4450000 },
  { date: '2024-04-30', time: '16:25', open: 154.67, high: 155.45, low: 153.02, close: 153.87, volume: 4500000 },
  { date: '2024-04-30', time: '16:30', open: 153.87, high: 153.89, low: 152.85, close: 153.58, volume: 4550000 },
  { date: '2024-04-30', time: '16:35', open: 153.58, high: 154.37, low: 152.98, close: 154.28, volume: 4600000 },
  { date: '2024-04-30', time: '16:40', open: 154.28, high: 155.56, low: 154.06, close: 155.02, volume: 4650000 },
  { date: '2024-04-30', time: '16:45', open: 155.02, high: 155.63, low: 154.29, close: 154.38, volume: 4700000 },
  { date: '2024-04-30', time: '16:50', open: 154.38, high: 155.63, low: 153.46, close: 154.64, volume: 4750000 },
  { date: '2024-04-30', time: '16:55', open: 154.64, high: 155.3, low: 154.06, close: 155.0, volume: 4800000 },
];

export default dummyIntradayData;
