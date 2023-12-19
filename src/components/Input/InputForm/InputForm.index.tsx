/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import { FC, forwardRef } from 'react'
import * as S from './InputForm.styles'
import { InputFormProps } from './InputForm.types'

export const InputForm: FC<InputFormProps> = forwardRef((props, ref) => {
  const {
    type = 'text',
    placeholder,
    fullwidth,
    leftIcon,
    rightIcon,
    error,
  } = props

  const hookForm = { ...props.hookform }

  return (
    <S.Container>
      <S.InputContainer fullwidth={String(fullwidth)}>
        {leftIcon}
        <input type={type} placeholder={placeholder} {...hookForm} />
        {rightIcon}
      </S.InputContainer>
      <S.MessageError>{error}</S.MessageError>
    </S.Container>
  )
})

InputForm.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  fullwidth: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  error: PropTypes.string,
  hookform: PropTypes.any,
}
