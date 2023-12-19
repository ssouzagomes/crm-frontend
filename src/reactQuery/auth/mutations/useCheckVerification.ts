import { useMutation } from '../../../query'
import { apiClient } from '../../../services'
import { DefaultApiResponse } from '../../../typings/general'
import { User } from '../../../typings/user'

export type CheckVerificationInput = {
  uuid: string
  token: string
  device: string
  client_info: string
}

export type CheckVerificationResponse = DefaultApiResponse<{
  user: User
  session_key: string
}>
export function useCheckVerificationMutation() {
  const getCheckVerification = async (params: CheckVerificationInput) => {
    const response = await apiClient.post('/Auth/CheckVerification', {
      ...params,
    })

    return response.data as CheckVerificationResponse
  }

  return useMutation(['useCheckVerification'], getCheckVerification)
}
