import styled from 'styled-components'
import type { SpinnerLoadingProps } from './SpinnerLoading.types'

export const Spinner = styled.div<SpinnerLoadingProps>`
  animation: 1s spin linear infinite;
  background: transparent;
  border-radius: 50%;
  border-right: 2px solid transparent;
  border-top: 2px solid
    ${({ spinnerColor }) => (spinnerColor === 'primary' ? '#014077' : '#FFF')};
  height: 16px;
  margin: 0;
  width: 16px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
