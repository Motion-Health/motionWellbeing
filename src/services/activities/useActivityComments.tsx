import { useQuery } from "react-query";
import { API } from "../api";

export type CommentContent = {
  serviceProviderName: string;
  comment: string;
  rating: number;
};

const getActivityComments = async (activityId: string | undefined) => {
  if (activityId) {
    const { data } = await API.get<CommentContent[]>(
      `/activities/comments/${activityId}`
    );
    return data;
  }
};

export const useActivityComments = (activityId?: string | undefined) => {
  return useQuery([`activity_comments_${activityId}`], () =>
    getActivityComments(activityId)
  );
};
