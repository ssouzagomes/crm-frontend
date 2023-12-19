import { useCheckVerificationMutation } from './useCheckVerification'
import { useLoginMutation } from './useLogin'
import { useResendVerificationMutation } from './useResendVerification'

export namespace AuthMutations {
  export const useLogin = useLoginMutation
  export const useResendVerification = useResendVerificationMutation
  export const useCheckVerification = useCheckVerificationMutation
}
