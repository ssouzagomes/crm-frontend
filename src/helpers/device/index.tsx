export const getToken = () => {
  const token = localStorage.getItem('@CRM:token')

  if (token) {
    return token
  }

  return null
}
