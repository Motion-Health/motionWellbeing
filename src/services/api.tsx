import axios from 'axios'

const baseURL = 
  process.env.NODE_ENV === 'production' 
    ? 'https://api.motionexercise.co.uk'
    : 'http://localhost:8000'

const API = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true, 
})

API.interceptors.response.use(
  (res) => res, 
  (err) => {
    if (err?.response?.status === 401 && 
        (err?.response?.message === 'token expired' || err?.response?.data === "Unauthorized")) {
          (window as Window).location = "/wellbeing/login"
    }

    return Promise.reject(err)
  }
)

export { API }