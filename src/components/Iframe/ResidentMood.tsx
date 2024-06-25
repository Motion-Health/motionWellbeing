// components/ResidentMood.tsx

import React from 'react';

interface ResidentMoodProps {
  rating: number;
}
const ResidentMood: React.FC<ResidentMoodProps> = ({ rating }) => {
  return (
    <div className="grid grid-rows-4 grid-flow-col">
      <div className="m-3 row-span-1 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Resident Mood</h3>
      </div>
      <div className="bg-white row-span-3 m-3 p-4 shadow-md rounded-md text-center">
        <div className="mt-2">
          <div className="text-6xl">😀</div>
          <div className="text-2xl">{rating ?? 5}/5</div>
        </div>
      </div>
    </div>
  );
};

export default ResidentMood;
