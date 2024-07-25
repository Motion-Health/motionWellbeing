import { useMutation } from "react-query";
import { API } from "../api";

export type AnnouncementData = {
  content: string;
  type: string;
  isActive: boolean;
};

export type AnnouncementsResponse = {
  content: string;
  mode: string;
  isActive: boolean;
  linkUrl?: string;
  linkText?: string;
};

type AnnouncementsRequest = {
  content: string;
  mode: string;
  isActive: boolean;
  linkUrl?: string;
  linkText?: string;
};

export const useCreateAnnouncement = () => {
  return useMutation((data: AnnouncementsRequest) =>
    API.post<AnnouncementsResponse>("/announcements", {
      ...data,
    })
  );
};
