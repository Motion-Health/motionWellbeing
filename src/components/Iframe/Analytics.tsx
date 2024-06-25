// components/Analytics.tsx
const Analytics: React.FC = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col">
      <div className="m-3 row-span-1 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Analytics</h3>
      </div>

      <div className="bg-white row-span-3 m-3 p-4 shadow-md rounded-md text-center">
        <p>Updates Shared: 24</p>
        <p className="text-green-500">+20%</p>
      </div>
    </div>
  );
};

export default Analytics;
