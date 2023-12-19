import { FC, useState } from 'react'
import { AuthLayout } from '../_components/AuthLayout/AuthLayout.index'
import KeyIcon from '../../../assets/icons/KeyIcon'
import * as S from './FirstAccess.styles'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import ActionButton from '../../../components/Button/ActionButton/ActionButton.index'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPasswordValidation } from '../../../validator/firstAccess'
import { Else, If, Then } from 'react-if'
import LockPasswordIcon from '../../../assets/icons/LockPasswordIcon'
import RoundButtonIcon from '../../../components/Button/RoundButtonIcon/RoundButtonIcon.index'
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon'

export const FirstAccess: FC = () => {
  const [pin, setPin] = useState('')
  const [registerPinPage, setRegisterPinPage] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordValidation),
    mode: 'onSubmit',
  })

  const validatePassword = handleSubmit(() => {
    setRegisterPinPage(true)
  })

  return (
    <AuthLayout>
      <S.Container>
        <If condition={registerPinPage}>
          <Then>
            <div className="back-button">
              <RoundButtonIcon onClick={() => setRegisterPinPage(false)}>
                <ArrowLeftIcon width={32} height={32} />
              </RoundButtonIcon>
            </div>

            <LockPasswordIcon />
          </Then>
          <Else>
            <KeyIcon width={64} height={64} />

            <h5 className="first-access-title">
              Cadastre uma nova senha de acesso.
            </h5>

            <p className="first-access-subtitle">
              Escolha uma nova senha para acessar o CRM. Utilize letras, números
              e caracteres especiais (*#$%...).
            </p>

            <S.FormContainer onSubmit={validatePassword}>
              <div>
                <S.Label>Senha antiga:</S.Label>
                <InputForm
                  fullwidth
                  type="password"
                  placeholder="Digite a senha"
                  hookform={register('password')}
                  error={errors.password?.message}
                />
              </div>

              <div>
                <S.Label>Nova senha:</S.Label>
                <InputForm
                  fullwidth
                  type="password"
                  placeholder="Digite a senha"
                />
              </div>

              <div>
                <S.Label>Confirmar nova senha:</S.Label>
                <InputForm
                  fullwidth
                  type="password"
                  placeholder="Digite a senha"
                />
              </div>

              <ActionButton
                fullWidth
                type="submit"
                label="Continuar"
                style={{ marginTop: 8 }}
              />
            </S.FormContainer>
          </Else>
        </If>
      </S.Container>
    </AuthLayout>
  )
}
