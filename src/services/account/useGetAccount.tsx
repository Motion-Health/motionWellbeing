import { useQuery } from 'react-query';

import { API } from '../api';

const getAccount = async () => {
  try {
    const { data } = await API.get('/account/');
    return data.account;
  } catch (error) {
    // If the error is a response from the server, print the message
    console.log('Error custom code --------');
    console.error(error);
    if (error.response) {
      console.error(error.response.data.message);
    } else {
      // Otherwise, it's an error in the request itself
      console.error(error.message);
    }
    throw error;
  }
};

export const useGetAccount = () => {
  return useQuery(['get_account'], getAccount);
};
