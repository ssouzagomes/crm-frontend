import { useState } from 'react'
import LockOutlinedIcon from '../../../assets/icons/LockOutlinedIcon'
import LoginOutlinedIcon from '../../../assets/icons/LoginOutlinedIcon'
import PersonOutlinedIcon from '../../../assets/icons/PersonOutlinedIcon'
import CallToActionButton from '../../../components/Button/CallToActionButton/CallToActionButton.component'
import { InputForm } from '../../../components/Input/InputForm/InputForm.index'
import * as S from './Login.styles'

export const Login = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
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
          <CallToActionButton
            fullWidth
            label="ENTRAR"
            loading={loading}
            onClick={handleSubmit}
            rightIcon={<LoginOutlinedIcon />}
          />
        </div>
      </S.Card>
    </S.Container>
  )
}
