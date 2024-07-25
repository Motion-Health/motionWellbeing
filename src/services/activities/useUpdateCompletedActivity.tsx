import { useMutation } from "react-query";

import { API } from "../api";

export type CompletedActivityData = {
  activityCompletedId: string;
  rating?: number;
  wouldDoAgain?: string;
  comment?: string;
  participants?: any[];
};

export const useUpdateCompletedActivity = () => {
  return useMutation((data: CompletedActivityData) => {
    console.log("data", data);
    const { activityCompletedId } = data;

    return API.patch<CompletedActivityData>(
      `/activities/complete/${activityCompletedId}`,
      {
        ...data,
      }
    );
  });
};
