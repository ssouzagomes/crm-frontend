import { CallToActionButtonProps } from './CallToActionButton.types'
import * as S from './CallToActionButton.styles'
import { If, Then, Else } from 'react-if'
import { SpinnerLoading } from '../../SpinnerLoading/SpinnerLoading.index'

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
    loading,
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
      <If condition={loading}>
        <Then>
          <SpinnerLoading spinnerColor="white" />
        </Then>
        <Else>
          {leftIcon && leftIcon}
          <S.Text color={color}>{label}</S.Text>
          {rightIcon && rightIcon}
        </Else>
      </If>
    </S.Button>
  )
}

export default CallToActionButton
