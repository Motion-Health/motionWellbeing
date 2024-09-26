// components/ActivitiesCompleted.tsx
import React from 'react';

interface ActivitiesCompletedProps {
  number: number;
}

const ActivitiesCompleted: React.FC<ActivitiesCompletedProps> = ({
  number,
}) => {
  return (
    <div className="grid grid-rows-iframeGrid md:col-span-3">
      <div className="row-span-1 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">
          Total Activities Completed (30 Days)
        </h3>
      </div>
      <div className="bg-white my-2 row-span-3 p-4 shadow-md rounded-md text-center flex flex-col justify-center items-center">
        <div className="text-5xl sm:text-7l md:text-9xl lg:text-9xl font-black">
          {number}
        </div>
        {/* Here for later use
        
        <div
          className={`${
            number && number >= 5 ? 'text-9xl' : 'text-7xl'
          } font-black`}
        >
          {number && number >= 5 ? number : 'N/A'}
        </div> */}
      </div>
    </div>
  );
};

export default ActivitiesCompleted;
