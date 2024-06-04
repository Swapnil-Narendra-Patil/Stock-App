// src/App.js

import React, { useEffect, useState } from 'react';
import { dummyData } from './data/dummyData.tsx';
import { fetchFinancialData } from './services/api.tsx';
import Dashboard from './components/Dashboard.js';
import Candlestick from './components/CandlestickChart.tsx';

const App = () => {
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
    <>
      <Dashboard />
      {/* <div className="App p-6"> */}
        {/* <h1 className="text-3xl font-bold mb-6">Apple Stock Overview</h1> */}
        {/* <Candlestick data={dummyData} /> */}
        {/* Uncomment this line if you want to use FinancialTable component */}
        {/* <FinancialTable data={data} /> */}
      {/* </div> */}
    </>
  );
};

export default App;
