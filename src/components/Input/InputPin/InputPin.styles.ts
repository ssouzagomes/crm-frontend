import styled, { css } from 'styled-components'

import { InputPinStyleProps } from './InputPin.types'
import { colors } from '../../../styles/colors'

export const Container = styled.div<InputPinStyleProps>`
  width: fit-content;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;

  .pincode-input-container {
    display: flex;
    gap: 10px;

    .pincode-input-text {
      width: 50px;
      height: 60px !important;
      margin: 0 !important;
      border-radius: 8px;
      border: 1px solid ${colors.gray500} !important;
      font-weight: 500;
      font-size: 31px;
      line-height: 130%;
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};

      ${({ error }) =>
        error &&
        css`
          border-color: ${colors.red500} !important;
        `}

      ${({ secret }) =>
        secret &&
        css`
          font-family: 'Arial';
        `}
    }
  }
`
