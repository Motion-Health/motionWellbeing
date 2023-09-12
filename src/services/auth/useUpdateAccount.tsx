import { useMutation } from "react-query";
import { API } from "../api";
import { Account } from "@/models/Account";

export type AdditionalInformationResponse = {
  serviceProviderName: string;
};

export const useUpdateAccount = () => {
  return useMutation((data: Account) => {
    return API.patch<AdditionalInformationResponse>(
      `/account/update/${data.accountId}`,
      {
        ...data,
      },
    );
  });
};

export const useUpdateOwnAccount = () => {
  return useMutation((data: Account) => {
    return API.patch<AdditionalInformationResponse>(`/account/update`, {
      ...data,
    });
  });
};
