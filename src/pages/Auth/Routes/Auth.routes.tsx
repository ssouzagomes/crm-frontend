import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import FirstAccessPage from '../Pages/FirstAccessPage'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/first-access" element={<FirstAccessPage />} />
    </Routes>
  )
}
