import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-2 top-2 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-around text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start flex-wrap">
          <span className="pt-10 text-2xl xl:text-4xl 2xl:text-5xl">
            ${price}
          </span>
          <span className="pt-10 text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </div>
        <div className="pt-2 text-lg xl:text-xl 2xl:text-2xl flex items-center">
          <span className={`${change > 0 ? "text-lime-500" : "text-red-500"}`}>
            {change}
          </span>
          <span className="text-neutral-400 ml-1">({changePercent}%)</span>
        </div>
      </div>
    </Card>
  );
};

export default Overview;
