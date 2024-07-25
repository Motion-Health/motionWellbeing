import { useQuery } from "react-query";
import { API } from "../api";

type DashboardRatings = {
  averageRating: number;
};

const getDashboardRatings = async (
  accountId: string,
  accountStatus: string,
  dateRangeFilter: string
) => {
  const { data } = await API.get<DashboardRatings>(
    `/dashboard/ratings?accountId=${accountId}&accountStatus=${accountStatus}&dateRangeFilter=${dateRangeFilter}`
  );
  return data;
};

export const useDashboardRatings = (
  accountId: string,
  accountStatus: string,
  dateRangeFilter: string
) => {
  return useQuery([`dashboard_ratings`], () =>
    getDashboardRatings(accountId, accountStatus, dateRangeFilter)
  );
};
