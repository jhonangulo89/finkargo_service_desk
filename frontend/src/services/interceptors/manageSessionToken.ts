import { AxiosError, AxiosInstance } from 'axios'

const manageSessionToken = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      if (response?.config?.url === '/auth/login' && response.status === 200) {
        console.log('Login success')
        if (
          response?.data?.token === undefined ||
          response?.data?.refreshToken === undefined
        ) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('refreshToken', response.data.refreshToken)
        }
      }
      return response
    },
    async (err: AxiosError<unknown>) => {
      return await Promise.reject(err)
    }
  )
}

export default manageSessionToken
