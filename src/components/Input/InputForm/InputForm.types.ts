import { ReactElement } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputFormProps {
  type?: 'text' | 'number' | 'password' | string
  placeholder: string
  fullwidth?: boolean
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  error?: string
  hookform?: UseFormRegisterReturn
}
