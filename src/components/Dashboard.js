// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import Card from "./Card";
import FinancialTable from './FinancialTable';
import { fetchFinancialData } from '../services/api.tsx';
import CandlestickChart from './CandlestickChart.tsx'; // Updated import
import { dummyData } from '../data/dummyData.tsx';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchFinancialData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-5 px-10 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <Card>Header</Card>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Card>
          <CandlestickChart data={dummyData} />
        </Card>
      </div>
      <div>
        <Card>Overview</Card>
      </div>
      <div className="row-span-2 xl:row-span-3 overflow-auto">
        <Card>
          <FinancialTable data={data} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
