import { useQuery } from 'react-query'
import { API } from '../api'

const getRecentActivitiesPublic = async (userId: string) => {
  const { data } = await API.get(`/activities/recent/${userId}`)
  return data
}

export const useRecentctivitiesPublic = (userId: string) => {
  return useQuery(['activity_recent', userId], () => getRecentActivitiesPublic(userId), {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}