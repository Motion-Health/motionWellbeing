import { useQuery } from "react-query";
import { API } from "../api";

const announcement = async () => {
  const { data } = await API.get("/announcements/");
  return data;
};

export const useGetAnnouncement = () => {
  return useQuery(["announcement"], announcement, {
    // staleTime: 1000 * 60 * 60 * 24, // one day
    staleTime: 1, // one day
    select: (announcement) => {
      return announcement;
    },
  });
};
