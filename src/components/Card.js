import React from 'react';

const Card = ({children}) => {
  return (
    <div className="w-full h-full rounded-md relative p-0 overflow-auto border-2 ">
      {children}
    </div>
  );
};

export default Card;
