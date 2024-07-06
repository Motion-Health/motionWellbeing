import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ActivitiesOverTimeProps = {
  dates: { month: string; activities: number }[];
};

const ActivitiesOverTime: React.FC<ActivitiesOverTimeProps> = ({ dates }) => {
  const currentDate = new Date();
  const lastFourMonths = [];

  // Generate dates for the last 4 months
  for (let i = 0; i < 9; i++) {
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
  // Before mapping over lastFourMonths, ensure dates is defined
  const fullDataset = lastFourMonths.map(({ year, month }) => {
    let existingEntry = undefined;
    if (dates) {
      // Check if dates is defined
      existingEntry = dates.find(
        (entry) => entry.year === year && entry.month === month
      );
    }
    runningTotal += existingEntry?.count || 0;
    return { year, month, count: runningTotal };
  });

  const data = {
    labels: fullDataset.map((entry) => `${entry.year}-${entry.month}`),
    datasets: [
      {
        label: 'Activities Count',
        data: fullDataset.map((entry) => entry.count),
        fill: true,
        backgroundColor: 'rgba(0, 128, 0, 0.2)', // Light green fill
        borderColor: 'rgba(0, 128, 0, 1)', // Darker green border
        borderWidth: 2,
        tension: 0.4, // This makes the line smooth and curved
        pointBackgroundColor: 'rgba(0, 128, 0, 1)',
        pointBorderColor: 'rgba(0, 128, 0, 1)',
        pointRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Hide y-axis gridlines
        },
      },
      x: {
        grid: {
          display: false, // Hide x-axis gridlines
        },
      },
    },
  };

  return (
    <div className="grid grid-rows-iframeGrid">
      <div className="m-3 row-span-1 bg-gray-100 shadow-md rounded text-center">
        <h3 className="text-left p-1 text-gray-700">Activities Over Time</h3>
      </div>

      <div className="bg-white row-span-3 m-3 p-4 shadow-md rounded-md text-center  flex flex-col justify-center items-cente">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivitiesOverTime;
