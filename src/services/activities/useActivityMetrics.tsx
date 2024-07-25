import { useQuery } from "react-query";

import { API } from "../api";

type ActivityMetrics = {
  timesCompleted: number;
  averageRating: number;
};

const getActivityMetrics = async (activityId: string) => {
  const { data } = await API.get<ActivityMetrics>(
    `/activities/metrics/${activityId}`
  );
  return data;
};

const listActivities = async () => {
  const { data } = await API.get("/activities/");
  return Promise.all(
    data.map(async (activity) => ({
      ...activity,
      metrics: await getActivityMetrics(activity.id),
    }))
  );
};

export const useListActivitiesWithMetrics = () => {
  return useQuery(["list_activities_with_metrics"], listActivities);
};

export const useActivityMetrics = (activityId?: string | undefined) => {
  return useQuery([`activity_metrics_${activityId}`], () =>
    getActivityMetrics(activityId)
  );
};
