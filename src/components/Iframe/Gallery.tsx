// components/Gallery.tsx
const Gallery: React.FC = () => {
  return (
    <div className="md:col-span-1">
      <div className="m-3 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Your Gallery</h3>
      </div>
      <div className="bg-white m-3 p-4 shadow rounded-lg">
        <div className="grid grid-cols-2 gap-2 mt-2">
          <img
            src="/gallery1.jpg"
            alt="Gallery Image 1"
            className="rounded-lg"
          />
          <img
            src="/gallery2.jpg"
            alt="Gallery Image 2"
            className="rounded-lg"
          />
          <div className="flex items-center justify-center bg-gray-100 rounded-lg">
            <span className="text-2xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
