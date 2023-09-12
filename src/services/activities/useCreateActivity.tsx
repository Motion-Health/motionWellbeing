import { useMutation } from 'react-query'
import { API } from '../api'

export type ActivityData = {
  activityId: number
  activityName: string
  category: string
  createdAt?: string
  creditName?: string
  description?: string
  equipmentRequired?: string
  tags?: string[] | null
  timeLength: string
  videoLink?: string
  visibleToUsers?: string[]
  imageFileName?: string | null
  documentFileName?: string | null
  lastCompletedDate?: string
}

export const useCreateActivity = () => {
  return useMutation((data: ActivityData) =>
    API.post<ActivityData>('/activities', {
      ...data,
    })
  )
}
