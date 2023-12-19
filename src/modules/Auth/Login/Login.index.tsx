import LockIcon from '../../../assets/icons/LockIcon'
import LoginIcon from '../../../assets/icons/LoginIcon'
import PersonIcon from '../../../assets/icons/PersonIcon'
import ActionButton from '../../../components/Button/ActionButton/ActionButton.index'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import * as S from './Login.styles'
import { AuthMutations } from '../../../reactQuery/auth/mutations/auth.mutations'
import { useForm } from 'react-hook-form'
import { LoginForm, loginFormValidation } from '../../../validator/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, useState } from 'react'
import { AuthLayout } from '../_components/AuthLayout/AuthLayout.index'
import VisibilityIcon from '../../../assets/icons/VisibilityIcon'
import VisibilityOffIcon from '../../../assets/icons/VisibilityOffIcon'
import RoundButtonIcon from '../../../components/Button/RoundButtonIcon/RoundButtonIcon.index'
import { Else, If, Then } from 'react-if'
import { ConfirmToken } from '../ConfirmToken/ConfirmToken.index'

export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmToken, setConfirmToken] = useState(false)

  const {
    data: loginResponse,
    mutateAsync: loginMutate,
    isLoading: isLoadingLogin,
  } = AuthMutations.useLogin()

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormValidation),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(() => {
    trigger().then(async (isValid: boolean) => {
      if (isValid) {
        try {
          localStorage.clear()
          sessionStorage.clear()

          const formValues = getValues()

          const response = await loginMutate({
            email: formValues.email,
            password: formValues.password,
          })

          if (response.isValid) setConfirmToken(true)
        } catch (error) {
          console.log(error)
        }
      }
    })
  })

  return (
    <AuthLayout>
      <If condition={confirmToken}>
        <Then>
          <ConfirmToken
            email={getValues('email')}
            loginToken={loginResponse?.result.uuid}
            setConfirmToken={setConfirmToken}
          />
        </Then>
        <Else>
          <h1 className="title">CRM</h1>

          <S.CredentialsContainer onSubmit={onSubmit}>
            <S.InputsContainer>
              <div>
                <S.Label>Email:</S.Label>
                <InputForm
                  fullwidth
                  placeholder="Digite seu email"
                  leftIcon={<PersonIcon />}
                  error={errors.email?.message}
                  hookform={register('email')}
                />
              </div>

              <div>
                <S.Label>Senha:</S.Label>
                <InputForm
                  fullwidth
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  error={errors.password?.message}
                  hookform={register('password')}
                  leftIcon={<LockIcon />}
                  rightIcon={
                    <RoundButtonIcon
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </RoundButtonIcon>
                  }
                />
              </div>
            </S.InputsContainer>

            <button
              type="button"
              onClick={() => {}}
              className="forgot-password-button"
            >
              Esqueceu a senha?
            </button>

            <div className="submit-container">
              <ActionButton
                fullWidth
                type="submit"
                label="ENTRAR"
                loading={isLoadingLogin}
                rightIcon={<LoginIcon />}
              />
            </div>
          </S.CredentialsContainer>
        </Else>
      </If>
    </AuthLayout>
  )
}
