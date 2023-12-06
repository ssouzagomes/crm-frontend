import LockOutlinedIcon from '../../../assets/icons/LockOutlinedIcon'
import PersonOutlinedIcon from '../../../assets/icons/PersonOutlinedIcon'
import CallToActionButton from '../../../components/Button/CallToActionButton/CallToActionButton.component'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import * as S from './Login.styles'

export const Login = () => {
  const handleSubmit = () => {
    console.log('Entrar')
  }
  return (
    <S.Container>
      <S.Card>
        <h1 className="title">CRM</h1>

        <S.InputsContainer>
          <div>
            <S.Label>Email:</S.Label>
            <InputForm
              placeholder="Digite aqui"
              fullwidth
              leftIcon={<PersonOutlinedIcon />}
            />
          </div>

          <div>
            <S.Label>Senha:</S.Label>
            <InputForm
              placeholder="Digite aqui"
              fullwidth
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
          <CallToActionButton label="ENTRAR" fullWidth onClick={handleSubmit} />
        </div>
      </S.Card>
    </S.Container>
  )
}
