import { useMutation } from "react-query";
import { API } from "../api";

export type CompletedActivityData = {
  activityId: number;
  rating?: number;
};

type CompletedActivityResponse = {
  activityCompletedId: string;
};

export const useCompleteActivity = () => {
  return useMutation((data: CompletedActivityData) => {
    const { activityId } = data;

    return API.post<CompletedActivityResponse>(
      `/activities/complete/${activityId}`,
      {
        ...data,
      }
    );
  });
};
