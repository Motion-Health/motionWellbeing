import { useQuery } from 'react-query'
import { API } from '../api'

const getActivity = async (activityId: string | undefined) => {
  if (activityId) {
    const { data } = await API.get(`/activities/details/${activityId}`)
    return data
  }
}

export const useActivityDetails = (activityId?: string | undefined) => {
  return useQuery([`activity_details_${activityId}`],
    () => getActivity(activityId), {
      staleTime: 1000 * 60 * 60 * 24, // one day
    })
}
