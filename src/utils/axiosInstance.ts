import axios from 'axios'

let accessToken: string | null = null

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

async function refreshAccessToken() {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/refresh`,
      {},
      { withCredentials: true }
    )
    accessToken = response.data.accessToken
    return accessToken
  } catch (error) {
    throw error
  }
}

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const newToken = await refreshAccessToken()

        if (newToken) {
          originalRequest.headers.Authorization = `${newToken}`
          return api(originalRequest)
        }

        return Promise.reject(error)
      } catch (err) {
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  }
)
