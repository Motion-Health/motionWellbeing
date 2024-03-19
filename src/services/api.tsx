import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.motion.org.uk'
    : 'http://localhost:8000';

const API = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err?.response?.status === 401 &&
      (err?.response?.message === 'token expired' ||
        err?.response?.data === 'Unauthorized')
    ) {
      console.log('Redirecting to login');
      console.log('window.location.pathname', window.location.pathname);
      // log all the error info
      console.log('err', err);
      console.log('err.response', err.response);
      console.log('err.response.data', err.response.data);
      console.log('err.response.message', err.response.message);
      console.log('err.response.status', err.response.status);
      console.log('err.response.headers', err.response.headers);
      console.log('err.config', err.config);
      console.log('err.request', err.request);
      console.log('err.toJSON', err.toJSON);
      console.log('err.stack', err.stack);
      console.log('err.message', err.message);

      if (window.location.pathname !== '/iframe') {
        
        // The current URL path is not /iframe, redirect to login
        // console.log('Redirecting to login');
        // console.log('window.location.pathname', window.location.pathname);
        // console.log('window.location', window.location);
        // (window as Window).location = '/wellbeing/login';
      }
    }

    return Promise.reject(err);
  }
);

export { API };
