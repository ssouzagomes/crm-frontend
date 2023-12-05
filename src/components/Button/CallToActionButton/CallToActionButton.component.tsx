import { CallToActionButtonProps } from './CallToActionButton.types'
import * as S from './CallToActionButton.styles'

const CallToActionButton = (props: CallToActionButtonProps) => {
  const {
    label,
    onClick,
    disabled,
    fullWidth,
    backgroundColor = '#014077',
    size,
    color = '#FFF',
    leftIcon,
    rightIcon,
    marginColor,
    style,
  } = props

  const noLabel = !label || label?.length <= 0

  return (
    <S.Button
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      fullwidth={fullWidth}
      backgroundcolor={backgroundColor}
      margincolor={marginColor}
      nolabel={noLabel}
      size={size}
      style={style}
    >
      {leftIcon && leftIcon}
      <S.Text color={color}>{label}</S.Text>
      {rightIcon && rightIcon}
    </S.Button>
  )
}

export default CallToActionButton
