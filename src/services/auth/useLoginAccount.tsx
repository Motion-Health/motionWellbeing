import { useMutation } from "react-query";
import { API } from "../api";

export type LoginaccountResponse = {
  accountId: string;
  accountStatus: "noAccess" | "standard" | "group" | "premium" | "admin";
};

type LoginaccountRequest = {
  email: string;
  password: string;
};

export const useLoginAccount = () => {
  return useMutation((data: LoginaccountRequest) =>
    API.post<LoginaccountResponse>("/auth/login", {
      ...data,
    })
  );
};
