import styled from 'styled-components'

export const Container = styled.div<{ fullwidth: boolean }>`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'fit-content')};
  height: 48px;
  background: #c5c0c0;

  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  gap: 10px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #c5c0c0;
  }
`
