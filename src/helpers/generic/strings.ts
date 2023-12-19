export const hideEmailUsername = (email: string) => {
  const emailSplitted = email.split('@')

  const username = `${emailSplitted[0].slice(0, 3)}${'*'.repeat(
    emailSplitted[0].length - 3,
  )}`

  const domain = `${emailSplitted[1]}`

  return `${username}@${domain}`
}
