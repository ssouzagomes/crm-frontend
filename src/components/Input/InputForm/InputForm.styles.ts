import styled from 'styled-components'

export const Container = styled.div``

export const InputContainer = styled.div<{ fullwidth: string }>`
  width: ${({ fullwidth }) => (fullwidth === 'true' ? '100%' : 'fit-content')};
  height: 48px;
  background: #dcdcdc;

  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  gap: 8px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #dcdcdc;
  }
`

export const MessageError = styled.p`
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 11px;
  color: red;
  margin-top: 4px;
`
