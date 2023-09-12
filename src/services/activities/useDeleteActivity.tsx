import { useMutation } from 'react-query'
import { API } from '../api'

export const useDeleteActivity = () => {
  
  return useMutation((activityId) => {
    return API.delete(`/activities/${activityId}`)
  })
}
