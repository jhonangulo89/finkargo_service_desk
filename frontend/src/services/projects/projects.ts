import { AxiosRequestConfig } from 'axios'
import apiInstance from '@services/instance'

interface GetProjects {
  path: string
  config?: AxiosRequestConfig<unknown> | undefined
}

interface PostProjects {
  path: string
  data?: unknown
  config?: AxiosRequestConfig<unknown> | undefined
}

const getProjects = async ({ path, config }: GetProjects) => {
  return await apiInstance.get(`/projects/${path}`, config)
}

const postProjects = async ({ path, data, config }: PostProjects) => {
  return await apiInstance.post(`/projects/${path}`, data, config)
}

const putProjects = async ({ path, data, config }: PostProjects) => {
  return await apiInstance.put(`/projects/${path}`, data, config)
}

const patchProjects = async ({ path, data, config }: PostProjects) => {
  return await apiInstance.patch(`/projects/${path}`, data, config)
}

export { getProjects, postProjects, putProjects, patchProjects }
