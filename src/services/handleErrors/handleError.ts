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
    console.log(errorDetails)
  }
}
