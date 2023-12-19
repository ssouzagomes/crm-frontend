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
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon'
import PasswordIcon from '../../../assets/icons/PasswordIcon'
import { InputPin } from '../../../components/Input/InputPin/InputPin.index'
import useTimer from '../../../hooks/useTimer'
import { Info } from '../../../components/Toast/Toast.index'
import { hideEmailUsername } from '../../../helpers/generic/strings'
import { browserInfo } from '../../../helpers/device'
import { apiClient } from '../../../services'

export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmToken, setConfirmToken] = useState(false)
  const [newUuid, setNewwUuid] = useState<string | null>(null)

  const { timeLeft, restartTimer, counting } = useTimer(30)

  const {
    data: loginResponse,
    mutateAsync: loginMutate,
    isLoading: isLoadingLogin,
  } = AuthMutations.useLogin()

  const { mutateAsync: resendVerification } =
    AuthMutations.useResendVerification()

  const { mutateAsync: checkVerification } =
    AuthMutations.useCheckVerification()

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

  const handleResendVerification = async () => {
    if (loginResponse?.isValid) {
      try {
        const response = await resendVerification({
          uuid: loginResponse.result.uuid,
        })

        setNewwUuid(response.result)

        if (response.isValid) {
          Info({
            title: 'Código reenviado',
            subtitle: `Um código foi reenviado para ${hideEmailUsername(
              getValues('email'),
            )}`,
          })

          restartTimer()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleVerification = async (token: string) => {
    if (token.length === 6 && loginResponse) {
      try {
        const device = browserInfo().os.name || 'unknow'
        const clientInfo = browserInfo().ua

        console.log(clientInfo)

        const response = await checkVerification({
          token,
          device,
          client_info: clientInfo,
          uuid: newUuid || loginResponse.result.uuid,
        })

        apiClient.defaults.headers.Authorization = response.result.session_key

        localStorage.setItem('@CRM:token', response.result.session_key)

        localStorage.setItem('@CRM:authenticated', 'true')

        if (response.isValid) {
          console.log('Deu bom dmss!!')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <AuthLayout>
      <If condition={confirmToken}>
        <Then>
          <S.ConfirmTokenContainer>
            <div className="back-button">
              <RoundButtonIcon onClick={() => setConfirmToken(false)}>
                <ArrowLeftIcon width={32} height={32} />
              </RoundButtonIcon>
            </div>

            <PasswordIcon width={64} height={64} />

            <h5 className="confirm-token-title">
              Confirme o código de segurança.
            </h5>

            <p className="confirm-token-subtitle">
              Seu código de segurança foi enviado para o email cadastrado:{' '}
              {getValues('email') ? (
                <strong>{hideEmailUsername(getValues('email'))}</strong>
              ) : null}
            </p>

            <p className="confirm-token-description">
              Isso ajuda a mostrar que essa conta é realmente pertence a você.
            </p>

            <InputPin size={6} autoFocus secret onFinish={handleVerification} />

            <div
              className="resend-verification-container"
              onClick={counting ? () => {} : handleResendVerification}
            >
              <button
                type="button"
                style={{ cursor: counting ? 'not-allowed' : 'pointer' }}
              >
                Não recebi meu código de acesso {counting ? `${timeLeft}s` : ''}
              </button>
            </div>
          </S.ConfirmTokenContainer>
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
