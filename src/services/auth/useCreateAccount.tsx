import { useMutation } from 'react-query'
import { API } from '../api'

export type RegisterAccountResponse = {
  accountId: string, 
  email: string, 
  serviceProviderName?: string,
}

type RegisterAccountRequest = {
  email: string
  password: string
}

export const useCreateAccount = () => {
  return useMutation((data: RegisterAccountRequest) =>
    API.post<RegisterAccountResponse>('/auth/register', {
      ...data,
    })
  )
}
