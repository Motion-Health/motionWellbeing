import { useQuery } from "react-query";

import { API } from "../api";

const isLoggedIn = async () => {
  const { data } = await API.get("/is-logged-in/");
  console.log(data);
  return data?.isLoggedIn;
};

export const useIsLoggedIn = () => {
  return useQuery(["is_logged_in"], isLoggedIn);
};
