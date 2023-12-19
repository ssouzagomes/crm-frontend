import { FC } from 'react'
import * as S from './SpinnerLoading.styled'
import type { SpinnerLoadingProps } from './SpinnerLoading.types'

export const SpinnerLoading: FC<SpinnerLoadingProps> = ({
  spinnerColor = 'primary',
  size,
}) => {
  return (
    <S.Spinner
      spinnerColor={spinnerColor}
      size={size}
      data-testid="loader-spinner"
      aria-details="spinner loading"
    />
  )
}
