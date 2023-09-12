import { useQuery } from 'react-query'
import { API } from '../api'

type DashboardParticipants = {
  metricCount: number
  metricChange: number
}

const getDashboardParticipants = async (metric: string, accountId: string, accountStatus: string, dateRangeFilter: string) => {
  const { data } = await API.get<DashboardParticipants>(`/dashboard/metrics?metric=${metric}&accountId=${accountId}&accountStatus=${accountStatus}&dateRangeFilter=${dateRangeFilter}`)
  return data
}

export const useDashboardMetrics = (metric: string, accountId: string, accountStatus: string, dateRangeFilter: string) => {
  return useQuery([`dashboard_metrics_${accountId}_${dateRangeFilter}_${metric}`],
    () => getDashboardParticipants(metric, accountId, accountStatus, dateRangeFilter))
}
