import { AxiosRequestConfig } from 'axios'
import apiInstance from '../instance'

interface GetApi {
  path: string
  config?: AxiosRequestConfig<unknown> | undefined
}

interface PostApi {
  path: string
  data?: unknown
  config?: AxiosRequestConfig<unknown> | undefined
}

const getAuth = async ({ path, config }: GetApi) => {
  return await apiInstance.get(`/auth/${path}`, config)
}

const postAuth = async ({ path, data, config }: PostApi) => {
  return await apiInstance.post(`/auth/${path}`, data, config)
}

const putAuth = async ({ path, data, config }: PostApi) => {
  return await apiInstance.put(`/auth/${path}`, data, config)
}

const patchAuth = async ({ path, data, config }: PostApi) => {
  return await apiInstance.patch(`/auth/${path}`, data, config)
}

export { getAuth, postAuth, putAuth, patchAuth }
