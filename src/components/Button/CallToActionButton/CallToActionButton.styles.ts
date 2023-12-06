import styled from 'styled-components'
import { transparentize } from 'polished'

interface ButtonStyledProps {
  fullwidth?: boolean
  size?: 'small' | 'medium' | 'large'
  backgroundcolor?: string
  margincolor?: string
  nolabel: boolean
  disabled?: boolean
}

export const Button = styled.button<ButtonStyledProps>`
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ nolabel }) => (String(nolabel) === 'true' ? '0' : '8')}px;

  border: ${({ margincolor }) =>
    margincolor ? `1px solid ${margincolor}` : 'none'};

  background: ${({ backgroundcolor }) => backgroundcolor || '#014077'};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    background: ${({ backgroundcolor, margincolor }) =>
      backgroundcolor === 'transparent'
        ? transparentize(0.9, String(margincolor))
        : transparentize(0.1, String(backgroundcolor))};
  }

  width: ${({ fullwidth }) =>
    String(fullwidth) === 'true' ? '100%' : 'fit-content'};

  cursor: ${({ disabled }) =>
    String(disabled) === 'true' ? 'not-allowed' : 'pointer'};

  opacity: ${({ disabled }) => (String(disabled) === 'true' ? '0.3' : '1')};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          padding: 8px 16px; 
          font-size: 14px;
        `
      case 'medium':
        return `
          padding: 12px 32px;
          font-size: 14px;
        `
      case 'large':
        return `
          height: 56px;
          padding: 0 32px;
          font-size: 15px;
        `
      default:
        return `
          height: 48px;
          font-size: 14px;
        `
    }
  }}
`
export const Text = styled.p<{ color: string }>`
  font-weight: 500;
  color: ${({ color }) => color};
`
