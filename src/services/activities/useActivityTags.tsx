import { useQuery } from 'react-query'
import { API } from '../api'

export type TagData = {
  activityTagId: number
  value: string
  label: string
}

const activityTags = async () => {
  const { data } = await API.get('/activities/tags')
  return data
}

export const useActivityTags = () => {
  return useQuery(['activity_tags'], activityTags, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}
