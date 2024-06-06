// src/App.js

import React, { useEffect, useState, useContext } from "react";
import { fetchFinancialData } from "./services/api.tsx";
import Dashboard from "./components/Dashboard.js";
import News from "./components/News.js";
import ThemeContext from "./context/ThemeContext.js";

const App = () => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchFinancialData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`h-screen overflow-y-auto ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100 text-black"
        }`}
      >
        <Dashboard />
        <div className="p-5">
          <News news={data.news} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
