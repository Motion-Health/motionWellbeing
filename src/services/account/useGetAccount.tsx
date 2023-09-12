import { useQuery } from 'react-query'
import { API } from '../api'

const getAccount = async () => {
  const { data } = await API.get('/account/')
  return data.account
}

export const useGetAccount = () => {
  return useQuery(['get_account'], getAccount)
}
