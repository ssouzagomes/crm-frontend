import LockOutlinedIcon from '../../../assets/icons/LockOutlinedIcon'
import LoginOutlinedIcon from '../../../assets/icons/LoginOutlinedIcon'
import PersonOutlinedIcon from '../../../assets/icons/PersonOutlinedIcon'
import CallToActionButton from '../../../components/Button/CallToActionButton/CallToActionButton.component'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import * as S from './Login.styles'
import { AuthMutations } from '../../../reactQuery/auth/auth.mutations'
import { useForm } from 'react-hook-form'
import { LoginForm, loginFormValidation } from '../../../validator/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC } from 'react'

export const Login: FC = () => {
  const {
    data: loginResponse,
    mutateAsync: loginMutate,
    isLoading: isLoadingLogin,
  } = AuthMutations.useLogin()

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormValidation),
  })
  const onSubmit = () => {
    trigger().then(async (isValid: boolean) => {
      if (isValid) {
        console.log(isValid)
        try {
          localStorage.clear()
          sessionStorage.clear()

          const formValues = getValues()

          const response = await loginMutate({
            email: formValues.email,
            password: formValues.password,
          })

          if (response.isValid) {
            console.log('Success login!')
          }
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  return (
    <S.Container>
      <S.Card>
        <h1 className="title">CRM</h1>

        <S.InputsContainer>
          <div>
            <S.Label>Email:</S.Label>
            <InputForm
              fullwidth
              placeholder="Digite seu email"
              leftIcon={<PersonOutlinedIcon />}
              error={errors.email?.message}
              hookform={register('email')}
            />
          </div>

          <div>
            <S.Label>Senha:</S.Label>
            <InputForm
              fullwidth
              type="password"
              placeholder="Digite sua senha"
              leftIcon={<LockOutlinedIcon />}
              error={errors.password?.message}
              hookform={register('password')}
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
          <CallToActionButton
            fullWidth
            label="ENTRAR"
            loading={isLoadingLogin}
            onClick={onSubmit}
            rightIcon={<LoginOutlinedIcon />}
          />
        </div>
      </S.Card>
    </S.Container>
  )
}
