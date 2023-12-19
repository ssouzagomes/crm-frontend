import { useMutation } from '../../../query'
import { apiClient } from '../../../services'

export type ResendVerificationInput = {
  uuid: string
}

export type ResendVerificationResponse = {
  result: string
  isValid: boolean
}

export function useResendVerificationMutation() {
  const getResendVerification = async (params: ResendVerificationInput) => {
    const response = await apiClient.post('/Auth/ResendVerification', {
      ...params,
    })

    return response.data as ResendVerificationResponse
  }

  return useMutation(['useResendVerification'], getResendVerification)
}
