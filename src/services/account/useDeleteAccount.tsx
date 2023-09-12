import { useMutation } from 'react-query'
import { API } from '../api'

type DeleteAccountResponse = {
  accountId: string, 
  serviceProviderName: string
}

export const useDeleteAccount = () => {
  return useMutation((accountId: string) => {
    return API.delete<DeleteAccountResponse>('/account/delete/', {
      data: { accountId }
    })
  })
}

