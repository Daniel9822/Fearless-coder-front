import axios from 'axios'
// import { getLocalStorage } from './getLocalStorage'

const SERVER_URL = process.env.SERVER_URL

const instance = axios.create({
  baseURL: `${SERVER_URL}/api`
})

instance.interceptors.request.use(
  (config) => {
    const token = true
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export const axiosConfig = instance
