import React from 'react';
import './Shimmer.css'; 

const Shimmer = () => {
  return (
    <div className="w-64 p-2 rounded-md shadow-2xl bg-white shimmer">
      <div className="w-full">
        <div className="w-full h-52 bg-gray-300 shimmer-box"></div>
        <div className="h-6 mt-2 bg-gray-300 shimmer-box"></div>
        <div className="h-4 mt-2 bg-gray-300 shimmer-box"></div>
        <div className="flex justify-between mt-2">
          <div className="h-4 w-1/2 bg-gray-300 shimmer-box"></div>
          <div className="h-4 w-1/4 bg-gray-300 shimmer-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
