import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputPinProps {
  size: number
  secret?: boolean
  autoFocus?: boolean
  error?: boolean
  disabled?: boolean
  type?: 'numeric' | 'custom'
  marginTop?: number
  marginBottom?: number
  onFinish?: (value: string, index: number) => void
  onChange?: (value: string, index: number) => void
  errorMessage?: string
}

export interface InputPinStyleProps {
  secret?: boolean
  error?: boolean
  marginTop?: number
  marginBottom?: number
  disabled?: boolean
}
