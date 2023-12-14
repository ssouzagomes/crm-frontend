import { Error } from '../../components/Toast/Toast.index'
import { errorToAvoid, formatErrorMessage } from './errorConstants'

interface ErrorResponse {
  code?: string
  message?: string
  response: {
    data: {
      message: string
    }
  }
}

export const handleErrors = async (error: ErrorResponse) => {
  const errorString = error.response?.data?.message || error?.message

  if (!errorString || errorToAvoid.includes(errorString)) return

  const errorDetails = formatErrorMessage(errorString)

  if (errorDetails) {
    Error({
      title: errorDetails.title,
      subtitle: errorDetails.description,
      autoClose: 5000,
    })

    errorDetails?.act?.()
  } else {
    Error({
      title: 'Ocorreu um erro, tente novamente.',
      autoClose: 5000,
    })
  }
}
