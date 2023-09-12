import { useMutation } from 'react-query'
import { API } from '../api'

import { Event } from '@/models/Event'

export const useCreateEvent = () => {
  return useMutation((data: Event) =>
    API.post<Event>(`/planner/${data.accountId}`, {
      ...data,
    })
  )
}
