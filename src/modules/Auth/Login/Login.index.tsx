import LockOutlinedIcon from '../../../assets/icons/LockOutlinedIcon'
import LoginOutlinedIcon from '../../../assets/icons/LoginOutlinedIcon'
import PersonOutlinedIcon from '../../../assets/icons/PersonOutlinedIcon'
import CallToActionButton from '../../../components/Button/CallToActionButton/CallToActionButton.component'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import * as S from './Login.styles'
import { AuthMutations } from '../../../reactQuery/auth/auth.mutations'
import { useForm } from 'react-hook-form'
import { loginFormValidation } from '../../../validator/login'
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () => {
  const {
    data: loginResponse,
    mutateAsync: loginMutate,
    isLoading: isLoadingLogin,
  } = AuthMutations.useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm({
    resolver: yupResolver(loginFormValidation),
    shouldUnregister: false,
    mode: 'onSubmit',
  })

  const onSubmit = () => {
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
            />
          </div>

          <div>
            <S.Label>Senha:</S.Label>
            <InputForm
              fullwidth
              placeholder="Digite sua senha"
              leftIcon={<LockOutlinedIcon />}
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
