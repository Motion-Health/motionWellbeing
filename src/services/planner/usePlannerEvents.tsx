import { useQuery } from "react-query";
import { API } from "../api";

const getPlannerEvents = async (activityId: string | undefined) => {
  if (activityId) {
    const { data } = await API.get(`/planner/${activityId}`);
    return data;
  }
};

export const usePlannerEvents = (activityId?: string | undefined) => {
  return useQuery(
    [`planner_events_${activityId}`],
    () => getPlannerEvents(activityId),
    {
      // staleTime: 1000 * 60 * 60 * 24, // one day
    }
  );
};
