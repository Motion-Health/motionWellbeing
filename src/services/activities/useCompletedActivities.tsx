import { useQuery } from "react-query";
import { API } from "../api";

const completedActivities = async () => {
  const { data } = await API.get("/activities/complete/");
  return data;
};

export const useCompletedActivities = () => {
  return useQuery("completed_activities", completedActivities, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  });
};
