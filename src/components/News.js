// src/components/News.js

import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Card from "./Card";

const News = ({ news }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Card>
      <div
        className={`pt-2 pr-2 pl-2 pb-1 ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-lg font-bold mb-2 ${
            darkMode ? "text-gray-100" : "text-black"
          }`}
        >
          News
        </h2>
        <div className="flex justify-between">
          {Object.entries(news).map(([key, article], index) => (
            <div
              key={key}
              className={`flex-1 mx-2 p-4 rounded-md border-2 ${
                index % 2 === 0
                  ? `${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    }`
                  : `${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-300"
                    }`
              }`}
            >
              <h3 className="text-md font-semibold">{`Article ${
                index + 1
              }`}</h3>
              <p className="text-sm">{article.summary}</p>
              <p
                className={`text-sm ${
                  article.sentiment.value === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Sentiment: {article.sentiment.value} (Score:{" "}
                {article.sentiment.score})
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

export default News;
