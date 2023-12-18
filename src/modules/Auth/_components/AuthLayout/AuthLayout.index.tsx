import { FC } from 'react'
import * as S from './AuthLayout.styles'
import { AuthLayoutProps } from './AuthLayout.types'

export const AuthLayout: FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  const { children } = props

  return (
    <S.Container>
      <S.Card>
        <h1 className="title">CRM</h1>

        {children}
      </S.Card>
    </S.Container>
  )
}
