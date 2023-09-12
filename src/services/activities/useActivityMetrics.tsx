import { useQuery } from 'react-query'
import { API } from '../api'

type ActivityMetrics = {
  timesCompleted: number
  averageRating: number
}

const getActivityMetrics = async (activityId: string | undefined) => {
  if (activityId) {
    const { data } = await API.get<ActivityMetrics>(`/activities/metrics/${activityId}`)
    return data
  }
}

export const useActivityMetrics = (activityId?: string | undefined) => {
  return useQuery([`activity_metrics_${activityId}`],
    () => getActivityMetrics(activityId))
}
