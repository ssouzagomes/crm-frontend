import { clearStorage } from '../../helpers/device'

export const formatErrorMessage = (type: string) => {
  const ErrorConstants: Record<
    string,
    {
      title: string
      description: string
      act?: () => void
    }
  > = {
    EMAIL_OR_PASSWORD_INVALID: {
      title: 'Email ou Senha Incorretos',
      description: '',
    },
    EMAIL_NOT_CRM_MAIL_VALID: {
      title: 'Não é um email de domínio CRM válido',
      description: '',
    },
    INVALID_TOKEN: {
      title: 'Código inválido',
      description: '',
    },
    INVALID_USER: {
      title: 'Usuário inválido',
      description: '',
    },
    OLD_PASSWORD_INCORRECT: {
      title: 'Senha antiga incorreta',
      description: '',
    },
    INVALID_SESSION: {
      title: 'Sessão inválida',
      description: '',
      act: () => clearStorage(),
    },
  }
  return ErrorConstants[type]
}

export const errorToAvoid = ['NO_PERMISSION', 'ERR_NETWORK']
