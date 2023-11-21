import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}
