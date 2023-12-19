import { FC } from 'react'
import * as S from './AuthLayout.styles'
import { AuthLayoutProps } from './AuthLayout.types'

export const AuthLayout: FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  const { children } = props

  return (
    <S.Container>
      <S.Card>{children}</S.Card>
    </S.Container>
  )
}
