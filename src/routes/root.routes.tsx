import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../pages/Auth/Routes/Auth.routes'
import PrivateRouter from './rules/private'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="auth/*"
          element={
            <PrivateRouter>
              <AuthRoutes />
            </PrivateRouter>
          }
        />

        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
