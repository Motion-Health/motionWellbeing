import { useQuery } from 'react-query'
import { API } from '../api'

const activityParticipants = async () => {
  const { data } = await API.get('/activities/participants')
  return data
}

export const useActivityParticipants = () => {
  return useQuery(['activity_participants'], activityParticipants)
}
