import { ActionButtonProps } from './ActionButton.types'
import * as S from './ActionButton.styles'
import { If, Then, Else } from 'react-if'
import { SpinnerLoading } from '../../SpinnerLoading/SpinnerLoading.index'

const ActionButton = (props: ActionButtonProps) => {
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
    type = 'button',
  } = props

  const noLabel = !label || label?.length <= 0

  return (
    <S.Button
      type={type}
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

export default ActionButton
