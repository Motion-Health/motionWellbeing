// components/ActivityItem.tsx
interface ActivityItemProps {
  title: string
  type: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, type }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mt-2">
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{type}</p>
    </div>
  )
}

export default ActivityItem