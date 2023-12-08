import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { screen } from '../../../styles/css/metrics'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
  color: #000;

  background: ${colors.gradient};
  background-blend-mode: multiply;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 32px;
  background: ${colors.white};
  border-radius: 8px;
  width: 476px;

  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));

  .title {
    color: ${colors.blue500};
    font-size: 40px;
  }

  .forgot-password-button {
    display: flex;
    align-self: flex-start;
    border: none;
    background: none;

    color: #063966;
    font-family: Poppins;
    font-size: 12px;
  }

  .submit-container {
    width: 200px;
    margin-top: 16px;

    display: flex;
    justify-content: center;

    @media ${screen.phone} {
      width: 100%;
    }
  }

  @media ${screen.phone} {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
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
