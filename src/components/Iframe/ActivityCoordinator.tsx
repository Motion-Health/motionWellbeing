// components/ActivityCoordinator.tsx
import React from 'react';

interface ActivityCoordinatorProps {
  Image: string;
  ImageALT: string;
  text: string;
}

const ActivityCoordinator: React.FC<ActivityCoordinatorProps> = ({
  Image,
  ImageALT,
  text,
}) => {
  return (
    <div className="bg-white p-4 shadow m-3 rounded-md shadow-md md:col-span-3">
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="md:col-span-1">
          <img src={Image} alt={ImageALT} className="h-80 m-auto rounded" />
          <p className="font-bold text-center text-black">{ImageALT}</p>
        </div>
        <div className="md:col-span-4 m-auto">
          <p className="text-xl text-black font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCoordinator;
