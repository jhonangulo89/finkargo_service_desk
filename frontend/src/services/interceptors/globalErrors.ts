import { AxiosError, AxiosInstance } from 'axios'
import { enqueueSnackbar } from 'notistack'

const globalErrors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async (err: AxiosError<unknown>) => {
      console.log('error', err)
      if (err?.response?.status === 500) {
        enqueueSnackbar({
          message: 'Error Interno del Servidor',
          variant: 'error'
        })
      }
      return await Promise.reject(err)
    }
  )
}

export default globalErrors
