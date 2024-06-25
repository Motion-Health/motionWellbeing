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
    <div className="bg-white p-4 shadow rounded-lg md:col-span-3">
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="col-span-2">
          <img src={Image} alt={ImageALT} className=" rounded mr-4" />
          <p className="font-bold text-center">{ImageALT}</p>
        </div>
        <div className="col-span-3">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCoordinator;
