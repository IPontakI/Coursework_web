import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8081/'
  baseURL: 'https://cursova-back-6ntf.onrender.com'
})

export default instance
