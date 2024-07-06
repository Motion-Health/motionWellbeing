// components/ResidentMood.tsx

import React from 'react';

interface ResidentMoodProps {
  rating: number;
}
const ResidentMood: React.FC<ResidentMoodProps> = ({ rating }) => {
  const getEmotionImage = (rating: number) => {
    // Ensure rating is within 1 to 5
    const validRating = Math.min(Math.max(rating, 1), 5);
    return `/assets/emotions/emotion-${validRating}.svg`;
  };

  return (
    <div className="grid grid-rows-iframeGrid">
      <div className="m-3 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Resident Mood</h3>
      </div>
      <div className="bg-white  m-3 p-4 shadow-md rounded-md text-center  flex flex-col justify-center items-cente">
        <div className="text-6xl">
          <img
            className="mx-auto"
            src={getEmotionImage(rating ?? 5)}
            alt="Resident Mood"
          />
        </div>
        <div className="text-2xl">{rating ?? 5}/5</div>
      </div>
    </div>
  );
};

export default ResidentMood;
