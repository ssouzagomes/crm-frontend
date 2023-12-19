import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .first-access-title {
    margin-top: 24px;
    margin-bottom: 10px;
    font-size: 32px;
    color: ${colors.gray700};
    text-align: center;
  }

  .first-access-subtitle {
    color: ${colors.gray700};
    text-align: center;
    margin-bottom: 32px;
    font-size: 16px;
  }

  .back-button {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Label = styled.p`
  color: #063966;
  font-size: 16px;
  margin-bottom: 8px;
`
