import { Navigate } from 'react-router-dom'
import { getToken } from '../../../helpers/device'
import { FirstAccess } from '../../../modules/Auth/FirstAccess/FirstAccess.index'

const FirstAccessPage = () => {
  const token = getToken()

  if (!token) return <Navigate to="/" replace />

  return <FirstAccess />
}

export default FirstAccessPage
