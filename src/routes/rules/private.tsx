import { Navigate, useMatch } from 'react-router-dom'
import { getToken } from '../../helpers/device'

interface PrivateRouterProps {
  children: React.ReactElement | null
}

const PrivateRouter = ({ children }: PrivateRouterProps) => {
  const token = getToken()
  const isAuth = useMatch('auth/*')

  if (!token) return isAuth ? children : <Navigate to="/auth" replace />

  return children
}

export default PrivateRouter
