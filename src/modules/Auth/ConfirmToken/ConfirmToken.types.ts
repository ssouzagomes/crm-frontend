export interface ConfirmTokenProps {
  email: string
  loginToken: string | undefined
  setConfirmToken: (value: boolean) => void
}
