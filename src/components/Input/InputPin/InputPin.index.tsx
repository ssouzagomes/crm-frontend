import * as S from './InputPin.styles'
import { InputPinProps } from './InputPin.types'
import PinInput from 'react-pin-input'

export const InputPin = ({
  size,
  secret,
  autoFocus,
  error,
  disabled,
  type,
  onFinish,
  onChange,
  marginTop,
  marginBottom,
}: InputPinProps) => {
  return (
    <S.Container
      secret={secret}
      error={error}
      marginTop={marginTop}
      marginBottom={marginBottom}
      disabled={disabled}
    >
      <PinInput
        length={size}
        type={type}
        secret={secret}
        focus={autoFocus}
        disabled={disabled}
        onChange={onChange}
        onComplete={onFinish}
      />
    </S.Container>
  )
}
