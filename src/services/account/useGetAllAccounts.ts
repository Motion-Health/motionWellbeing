import { useQuery } from 'react-query'
import { API } from '../api'

const getAllAccounts = async () => {
  const { data } = await API.get('/account/all')
  return data
}

export const useGetAllAccounts = () => {
  return useQuery(['get_all_accounts'], getAllAccounts)
}
