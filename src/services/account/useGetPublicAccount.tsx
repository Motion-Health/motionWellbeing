import { useQuery } from 'react-query';

import { API } from '../api';

const getPublicAccount = async (accountId: string) => {
  const { data } = await API.get(`/account/get/${accountId}`);
  return data;
};

export const useGetPublicAccount = (accountId: string) => {
  return useQuery(['get_public_account', accountId], () =>
    getPublicAccount(accountId)
  );
};
