import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .back-button {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 8px;
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
    margin-top: 24px;

    button {
      border: none;
      background: none;
      text-decoration: underline;
      color: ${colors.blue300};
    }
  }
`
