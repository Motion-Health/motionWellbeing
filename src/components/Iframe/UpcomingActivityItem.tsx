interface UpcomingActivityItemProps {
  name: string;
  start: string;
  end: string;
  rating: number;
  description: string;
  activityId: string;
  // image: string; - Not Implemented

  //Might need a general Activity Item class to take into account you need to get the description from the associated activity if there is one.
}
