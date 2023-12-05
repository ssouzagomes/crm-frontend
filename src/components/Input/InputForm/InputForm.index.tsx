import PropTypes from 'prop-types'
import { FC, forwardRef } from 'react'
import * as S from './InputForm.styles'
import { InputFormProps } from './InputForm.types'

export const InputForm: FC<InputFormProps> = forwardRef((props, ref) => {
  const { type = 'text', placeholder, fullwidth, leftIcon, rightIcon } = props

  return (
    <S.Container fullwidth={!!fullwidth}>
      {leftIcon}
      <input type={type || 'text'} placeholder={placeholder || 'Digite aqui'} />
      {rightIcon}
    </S.Container>
  )
})

InputForm.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  fullwidth: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
}
