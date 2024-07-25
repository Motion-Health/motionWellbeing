import { useMutation } from "react-query";
import { API } from "../api";

export type SetNewPasswordResponse = {
  resetPasswordId: string;
};

type SetNewPasswordRequest = {
  resetPasswordId: string;
};

export const useGetPasswordResetRecord = () => {
  return useMutation((data: SetNewPasswordRequest) => {
    const { resetPasswordId } = data;
    return API.get<SetNewPasswordResponse>(
      `/auth/password-reset-record/${resetPasswordId}`
    );
  });
};
