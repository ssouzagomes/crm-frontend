import * as S from './RoundButtonIcon.styles'
import { RoundButtonIconProps } from './RoundButtonIcon.types'

const RoundButtonIcon = (props: RoundButtonIconProps) => {
  const {
    selected,
    noHover,
    onClick,
    onMouseDown,
    disabled,
    buttonSize,
    buttonType,
    style,
    children,
  } = props

  return (
    <S.Container
      selected={selected}
      onClick={noHover ? () => {} : onClick}
      onMouseDown={noHover ? () => {} : onMouseDown}
      disabled={disabled}
      className={`${buttonSize || 'icon16'} ${buttonType || 'default'}`}
    >
      <div className="center-icon" style={style}>
        {children}
      </div>
    </S.Container>
  )
}

export default RoundButtonIcon
