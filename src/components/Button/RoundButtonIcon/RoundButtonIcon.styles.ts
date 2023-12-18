import styled, { css } from 'styled-components'

import { StyleProps } from './RoundButtonIcon.types'
import { colors } from '../../../styles/colors'

export const Container = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.gray500};
  }

  .center-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.icon16 {
    width: 30px;
    height: 30px;
    padding: 7px;
  }

  &.icon24 {
    width: 38px;
    height: 38px;
    padding: 7px;
  }

  &.iconWallet {
    width: 50px;
    height: 50px;
    padding: 12px 10px;
    border: none;
  }

  &.icon24v2 {
    width: 50px;
    height: 50px;
    padding: 13px;
  }
`
