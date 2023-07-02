import axios from 'axios'

export const axiosApiInstance = axios.create({
  baseURL: '/api/',
})
