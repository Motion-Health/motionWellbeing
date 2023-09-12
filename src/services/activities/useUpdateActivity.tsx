import { useMutation } from 'react-query'
import { API } from '../api'
import { ActivityData } from './useCreateActivity'

export const useUpdateActivity = () => {
  
  return useMutation((activityData: ActivityData) => {
    const updatedActivityData: ActivityData = {
      activityName: activityData.activityName, 
      category: activityData.category, 
      timeLength: activityData.timeLength, 
      description: activityData.description, 
      videoLink: activityData.videoLink, 
      equipmentRequired: activityData.equipmentRequired, 
      tags: activityData.tags, 
      creditName: activityData.creditName, 
      visibleToUsers: activityData.visibleToUsers, 
      imageFileName: activityData.imageFileName, 
      documentFileName: activityData.documentFileName, 

    }
    return API.patch<ActivityData>(`/activities/${activityData.activityId}`, {
      ...updatedActivityData,
    })
  })
}
