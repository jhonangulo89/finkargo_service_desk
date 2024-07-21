import axios from 'axios'
import manageSessionToken from './interceptors/manageSessionToken'
import globalErrors from './interceptors/globalErrors'

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
  headers: { 'x-api-key': 'foobar' }
})

manageSessionToken(apiInstance)
globalErrors(apiInstance)

export default apiInstance
