import { useMutation } from "react-query";
import { API } from "../api";

export const useDeleteEvent = () => {
  return useMutation((eventId) =>
    API.delete(`/planner/${eventId}`),
  );
};
