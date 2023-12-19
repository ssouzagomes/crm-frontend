import { useMutation } from '../../../query'
import { apiClient } from '../../../services'

export type LoginInput = {
  email: string
  password: string
}

export type LoginResponse = {
  result: {
    uuid: string
  }
  isValid: boolean
}

export function useLoginMutation() {
  const getLogin = async (params: LoginInput) => {
    const response = await apiClient.post('/Auth/Login', {
      ...params,
    })

    return response.data as LoginResponse
  }

  return useMutation(['useLogin'], getLogin)
}
