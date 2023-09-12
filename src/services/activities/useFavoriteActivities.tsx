import { useQuery } from 'react-query'
import { API } from '../api'

const getFavoriteActivities = async () => {
  const { data } = await API.get('/activities/favorites')
  return data
}

export const useFavoriteActivities = () => {
  return useQuery(['activity_favorites'], getFavoriteActivities, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}
