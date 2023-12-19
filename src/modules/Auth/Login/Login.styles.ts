import styled from 'styled-components'
import { screen } from '../../../styles/css/metrics'
import { colors } from '../../../styles/colors'

export const CredentialsContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .forgot-password-button {
    display: flex;
    align-self: flex-start;
    border: none;
    background: none;
    padding: 0;

    color: #063966;
    font-family: Poppins;
    font-size: 12px;
  }

  .submit-container {
    width: 200px;
    margin-top: 32px;

    display: flex;
    justify-content: center;

    @media ${screen.phone} {
      width: 100%;
    }
  }
`

export const InputsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Label = styled.p`
  color: #063966;
  font-family: Poppins;
  font-size: 16px;
  margin-bottom: 8px;
`

export const ConfirmTokenContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .back-button {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 40px;
  }

  .confirm-token-title {
    margin-top: 24px;
    margin-bottom: 10px;
    font-size: 32px;
    color: ${colors.gray700};
    text-align: center;
  }

  .confirm-token-subtitle {
    color: ${colors.gray700};
    text-align: center;
    margin-bottom: 32px;
    font-size: 16px;
  }

  .confirm-token-description {
    color: ${colors.gray700};
    text-align: center;
    margin-bottom: 32px;
    font-size: 16px;
  }

  .resend-verification-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-top: 24px;

    button {
      border: none;
      background: none;
      text-decoration: underline;
      color: ${colors.blue300};
    }
  }
`
