import { categoryIcons } from '@/data/categoryIcons';

interface RecentActivityItemProps {
  name: string;
  time: string;
  category: string;
  image: string;
  rating: number;
  description: string;
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  name,
  time,
  category,
  image,
  rating,
  description,
}) => {
  const imagePath = image
    ? `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/images/${image}`
    : '/assets/images/exercises/activity-placeholder.png';

  const categoryIcon: string = categoryIcons[category];

  return (
    <div className="bg-white p-4 shadow rounded-lg mt-2 flex items-start text-left">
      <div className="flex-grow">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <img src={categoryIcon} alt="Activity icon" width="19" height="19" />
        <p className="text-sm text-gray-600">Time: {time}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <img
        src={imagePath}
        alt={`${name} image`}
        className="w-32 h-32 object-cover rounded-lg ml-4"
      />
    </div>
  );
};

export default RecentActivityItem;
