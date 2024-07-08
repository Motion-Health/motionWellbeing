import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type ActivitiesOverTimeProps = {
  dates: { month: string; activities: number }[];
};

function getMonthName(monthNumber) {
  return new Date(0, monthNumber - 1).toLocaleString('default', {
    month: 'long',
  });
}

const ActivitiesOverTime: React.FC<ActivitiesOverTimeProps> = ({ dates }) => {
  const currentDate = new Date();
  const lastFourMonths = [];

  // Generate dates for the last 4 months
  for (let i = 0; i < 4; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    lastFourMonths.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1, // months are 0-indexed
    });
  }

  // Reverse to start from the oldest month
  lastFourMonths.reverse();
  let runningTotal = 0;
  const fullDataset = lastFourMonths.map(({ year, month }) => {
    const existingEntry = dates?.find(
      (entry) => entry.year === year && entry.month === month
    );
    runningTotal += existingEntry?.count || 0;
    return {
      year,
      month,
      monthName: getMonthName(month),
      ActivitiesCompleted: runningTotal,
    };
  });

  return (
    <div className="grid grid-rows-iframeGrid  md:col-span-5">
      <div className="row-span-1 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Activities Over Time</h3>
      </div>
      <div className="bg-white row-span-3 my-3 shadow-md rounded-md text-center flex flex-col justify-center items-center">
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <AreaChart
              width={500}
              height={200}
              data={fullDataset}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthName" />
              <YAxis domain={[0, 'dataMax + 2']} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="ActivitiesCompleted"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#greenFill)"
              />

              <defs>
                <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesOverTime;
