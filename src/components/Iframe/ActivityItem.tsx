import { categoryIcons } from '@/data/categoryIcons';

interface ActivityItemProps {
  name: string;
  time: string;
  category: string;
  image: string;
  rating: number;
  description: string;
  activityType: string;
  careHomeId: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  name,
  time,
  category,
  image,
  rating,
  description,
  activityType,
  careHomeId,
}) => {
  const imagePath =
    image && (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('/'))
      ? image
      : `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/images/${image}` ||
        '/assets/images/iframes/square-check-regular.png';

  const categoryIcon: string = categoryIcons[category];

  return (
    <div className="bg-white p-4 shadow rounded-lg mt-2 flex items-start text-left">
      <div className="flex-grow">
        <h3 className="text-lg">{name}</h3>
        {careHomeId !== '99552814-387e-4f10-93ab-4752ca43f599' && (
          <>
            <p className="text-sm text-gray-600">Category: {category}</p>
            <img
              src={categoryIcon}
              alt="Activity icon"
              width="19"
              height="19"
            />
            <p className="text-sm text-gray-600">Time: {time}</p>
          </>
        )}
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

export default ActivityItem;
