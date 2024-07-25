import { useQuery } from "react-query";

import { API } from "../api";

type DashboardParticipants = {
  metricCount: number;
  metricChange: number;
};

const getDashboardParticipants = async (
  metric: string,
  accountId: string,
  accountStatus: string,
  dateRangeFilter: string
) => {
  try {
    console.log(
      "getDashboardParticipants",
      metric,
      accountId,
      accountStatus,
      dateRangeFilter
    );
    const { data } = await API.get<DashboardParticipants>(
      `/dashboard/metrics?metric=${metric}&accountId=${accountId}&accountStatus=${accountStatus}&dateRangeFilter=${dateRangeFilter}`
    );
    console.log(data);
    return data;
  } catch (error) {
    // If the error is a response from the server, print the message
    if (error.response) {
      console.error(error.response.data.message);
    } else {
      // Otherwise, it's an error in the request itself
      console.error(error.message);
    }
    throw error;
  }
};

export const useDashboardMetrics = (
  metric: string,
  accountId: string,
  accountStatus: string,
  dateRangeFilter: string
) => {
  return useQuery(
    [`dashboard_metrics_${accountId}_${dateRangeFilter}_${metric}`],
    () =>
      getDashboardParticipants(
        metric,
        accountId,
        accountStatus,
        dateRangeFilter
      )
  );
};
