import styled from 'styled-components'
import { screen } from '../../../styles/css/metrics'

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
`
