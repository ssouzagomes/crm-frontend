import { CSSProperties, ReactNode } from 'react'

export interface ActionButtonProps {
  label?: string
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  color?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  marginColor?: string
  style?: CSSProperties
  loading?: boolean
  type?: 'button' | 'submit'
}
