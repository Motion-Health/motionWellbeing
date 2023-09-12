import { useQuery } from 'react-query'
import { API } from '../api'

export type CategoryData = {
  activityCategoryId: number
  value: string
  label: string
}

const activityCategories = async () => {
  const { data } = await API.get('/activities/categories')
  return data
}

export const useActivityCategories = () => {
  return useQuery(['activity_categories'], activityCategories, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}
