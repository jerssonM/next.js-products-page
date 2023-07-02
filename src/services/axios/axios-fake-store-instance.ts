import axios from 'axios'

export const axiosFakeStoreInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})
