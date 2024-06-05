// src/App.js

import React, { useEffect, useState } from 'react';
import { dummyData } from './data/dummyData.tsx';
import { fetchFinancialData } from './services/api.tsx';
import Dashboard from './components/Dashboard.js';
import Candlestick from './components/CandlestickChart.tsx';
import ThemeContext from './context/ThemeContext.js';

const App = () => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const result = await fetchFinancialData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (<ThemeContext.Provider value = {{ darkMode, setDarkMode }}>
    <>
      <Dashboard />
    </>
    </ThemeContext.Provider>
  );
};

export default App;
