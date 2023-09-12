import { useMutation } from 'react-query'
import { API } from '../api'

export type logoutAccountResponse = {
  accountId:string
  message: string
}

type logoutAccountRequest = {
  accountId:string
}

export const useLogoutAccount = () => {
  return useMutation((data: logoutAccountRequest) =>
    API.post<logoutAccountResponse>('/auth/logout', {
      ...data,
    })
  )
}
