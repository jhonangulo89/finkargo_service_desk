import { AxiosRequestConfig } from 'axios'
import apiInstance from '../instance'

interface GetTickets {
  path: string
  config?: AxiosRequestConfig<unknown> | undefined
}

interface PostTickets {
  path: string
  data?: unknown
  config?: AxiosRequestConfig<unknown> | undefined
}

const getTickets = async ({ path, config }: GetTickets) => {
  return await apiInstance.get(`/tickets/${path}`, config)
}

const postTickets = async ({ path, data, config }: PostTickets) => {
  return await apiInstance.post(`/tickets/${path}`, data, config)
}

const putTickets = async ({ path, data, config }: PostTickets) => {
  return await apiInstance.put(`/tickets/${path}`, data, config)
}

const patchTickets = async ({ path, data, config }: PostTickets) => {
  return await apiInstance.patch(`/tickets/${path}`, data, config)
}

export { getTickets, postTickets, putTickets, patchTickets }
