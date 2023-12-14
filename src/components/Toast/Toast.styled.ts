import styled from 'styled-components'

export const Container = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .toast-title,
  .toast-subtitle {
    font-family: Poppins, Helvetica, sans-serif;
  }

  .toast-title {
    font-weight: 500;
    font-size: 16px;
  }
`
export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  .close-text {
    font-size: 12px;
    font-weight: 500;
    margin: 2px 5px 0 0;
  }
`
