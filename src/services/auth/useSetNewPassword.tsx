import { useMutation } from 'react-query'
import { API } from '../api'

export type SetNewPasswordResponse = {
  // TODO
}

type SetNewPasswordRequest = {
  resetPasswordId:string, 
  password: string
}

export const useSetNewPassword = () => {
  return useMutation((data: SetNewPasswordRequest) => {
    const { resetPasswordId, password } = data
    
    return API.post<SetNewPasswordResponse>(`/auth/set-new-password/`, {
      resetPasswordId, password
    })
  })
}
