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
    <div className="bg-white p-4 shadow m-3 rounded-md shadow-md">
      {/* This grid layout will stack vertically on small screens and side-by-side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
        <div className="col-span-1 md:col-span-1">
          <img
            src={Image}
            alt={ImageALT}
            className="w-full h-auto m-auto rounded"
          />
          <p className="font-bold text-center text-black mt-2">{ImageALT}</p>
        </div>

        <div className="col-span-1 md:col-span-4 m-auto">
          <p className="text-base md:text-xl lg:text-2xl text-black font-medium">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCoordinator;
