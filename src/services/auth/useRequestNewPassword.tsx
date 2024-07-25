import { useMutation } from "react-query";
import { API } from "../api";

export type RequestNewPasswordResponse = {
  // TODO
};

type RequestNewPasswordRequest = {
  email: string;
};

export const useRequestNewPassword = () => {
  return useMutation((data: RequestNewPasswordRequest) =>
    API.post<RequestNewPasswordResponse>("/auth/reset-password", {
      ...data,
    })
  );
};
