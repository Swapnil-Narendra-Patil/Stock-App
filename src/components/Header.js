import React from "react";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <div className="w-full flex justify-between items-center xl:px-32 p-4">
      <h1 className="text-5xl">{name}</h1>
      <ThemeIcon />
    </div>
  );
};

export default Header;
