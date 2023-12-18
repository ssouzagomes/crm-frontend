/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export interface RoundButtonIconProps {
  children: ReactNode
  buttonSize?: 'icon16' | 'icon24' | 'iconWallet' | 'icon24v2'
  buttonType?: 'default' | 'flat' | 'active' | 'outlined'
  selected?: boolean
  onClick?: (event?: any) => void
  onMouseDown?: (event?: any) => void
  noHover?: boolean
  disabled?: boolean
  style?: object
}

export interface StyleProps {
  selected?: boolean
  disabled?: boolean
}
