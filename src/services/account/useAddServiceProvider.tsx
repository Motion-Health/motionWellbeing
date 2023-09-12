import { useMutation } from 'react-query'
import { API } from '../api'

export type AddServiceProviderResponse = {
  accountId: string, 
  email: string, 
  serviceProviderName?: string,
}

type AddServiceProviderRequest = {
  serviceProviderName: string,
  mainContactName?: string
  mainContactRole?: string
  phoneNumber?: string
  city?: string
  email?: string
  isPartOfAGroup?: string
  groupName?: string
  accountStatus: string
}

export const useAddServiceProvider = () => {
  return useMutation((data: AddServiceProviderRequest) =>
    API.post<AddServiceProviderResponse>('/account/add', {
      ...data,
    })
  )
}
