import { useMutation } from "react-query";
import { API } from "../api";

import { Event } from "@/models/Event";

export const useUpdateEvent = () => {
  return useMutation((data: Event) =>
    API.patch<Event>(`/planner/${data.eventId}`, {
      ...data,
    }),
  );
};
