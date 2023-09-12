import { useQuery } from 'react-query'
import { API } from '../api'

export type TimeLengthData = {
  activityTimeLengthId: number
  value: string
  label: string
}

const activityTimeLengths = async () => {
  const { data } = await API.get('/activities/time-lengths')
  return data
}

export const useActivityTimeLengths = () => {
  return useQuery(['activity_time_lengths'], activityTimeLengths, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}
