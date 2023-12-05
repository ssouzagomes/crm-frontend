import { ReactElement } from 'react'

export interface InputFormProps {
  type?: 'text' | 'number' | 'password' | string
  placeholder: string
  fullwidth?: boolean
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}
