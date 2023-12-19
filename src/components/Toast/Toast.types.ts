import { ReactNode } from 'react'
import { ToastOptions } from 'react-toastify'

export interface ToastComponentProps extends ToastOptions {
  title: string
  subtitle?: ReactNode | string
}
