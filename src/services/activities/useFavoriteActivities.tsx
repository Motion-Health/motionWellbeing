import { useQuery } from 'react-query'
import { API } from '../api'

const getFavoriteActivities = async () => {
  try {
  const { data } = await API.get('/activities/favorites')
  return data
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
}

export const useFavoriteActivities = () => {
  return useQuery(['activity_favorites'], getFavoriteActivities, {
    staleTime: 1000 * 60 * 60 * 24, // one day
  })
}
