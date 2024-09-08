// components/ResidentMood.tsx
import React from 'react';

interface ResidentMoodProps {
  rating: number;
}
const ResidentMood: React.FC<ResidentMoodProps> = ({ rating }) => {
  const getEmotionImage = (rating: number) => {
    // Ensure rating is within 1 to 5
    const roundedRating = Math.round(rating);
    const validRating = Math.min(Math.max(roundedRating, 1), 5);
    return `/assets/emotions/emotion-${validRating}.svg`;
  };

  return (
    <div className="grid grid-rows-iframeGrid md:col-span-2">
      <div className="bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Resident Mood</h3>
      </div>
      <div className="my-2 bg-white p-8 shadow-md rounded-md text-center  flex flex-col justify-center items-cente">
        <div className="text-6xl">
          <img
            className="mx-auto"
            src={getEmotionImage(rating ?? 5)}
            alt="Resident Mood"
          />
        </div>
        <div className="mt-2 text-xl text-black">{rating ?? 5}/5</div>
      </div>
    </div>
  );
};

export default ResidentMood;
