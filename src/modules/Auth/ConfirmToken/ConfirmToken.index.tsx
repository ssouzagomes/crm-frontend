import * as S from './ConfirmToken.styles'
import { AuthMutations } from '../../../reactQuery/auth/mutations/auth.mutations'
import { FC, useState } from 'react'
import RoundButtonIcon from '../../../components/Button/RoundButtonIcon/RoundButtonIcon.index'
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon'
import PasswordIcon from '../../../assets/icons/PasswordIcon'
import { InputPin } from '../../../components/Input/InputPin/InputPin.index'
import useTimer from '../../../hooks/useTimer'
import { Info } from '../../../components/Toast/Toast.index'
import { hideEmailUsername } from '../../../helpers/generic/strings'
import { browserInfo } from '../../../helpers/device'
import { apiClient } from '../../../services'
import { ConfirmTokenProps } from './ConfirmToken.types'
import { Else, If, Then } from 'react-if'
import { SpinnerLoading } from '../../../components/SpinnerLoading/SpinnerLoading.index'
import { redirect } from 'react-router-dom'

export const ConfirmToken: FC<ConfirmTokenProps> = (
  props: ConfirmTokenProps,
) => {
  const { email, loginToken, setConfirmToken } = props

  const [newUuid, setNewwUuid] = useState<string | null>(null)

  const { timeLeft, restartTimer, counting } = useTimer(30)
  const { mutateAsync: resendVerification } =
    AuthMutations.useResendVerification()

  const {
    mutateAsync: checkVerification,
    isLoading: isLoadingCheckVerification,
  } = AuthMutations.useCheckVerification()

  const handleResendVerification = async () => {
    if (loginToken) {
      try {
        const response = await resendVerification({
          uuid: loginToken,
        })

        setNewwUuid(response.result)

        if (response.isValid) {
          Info({
            title: 'Código reenviado',
            subtitle: `Um código foi reenviado para ${hideEmailUsername(
              email,
            )}`,
          })

          restartTimer()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleVerification = async (token: string) => {
    if (token.length === 6 && loginToken) {
      try {
        const device = browserInfo().os.name || 'unknow'
        const clientInfo = browserInfo().ua

        const response = await checkVerification({
          token,
          device,
          client_info: clientInfo,
          uuid: newUuid || loginToken,
        })

        apiClient.defaults.headers.Authorization = response.result.session_key

        localStorage.setItem('@CRM:token', response.result.session_key)

        localStorage.setItem('@CRM:authenticated', 'true')

        if (response.isValid) {
          redirect('/auth/first-access')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <div className="back-button">
        <RoundButtonIcon onClick={() => setConfirmToken(false)}>
          <ArrowLeftIcon width={32} height={32} />
        </RoundButtonIcon>
      </div>

      <PasswordIcon width={64} height={64} />

      <h5 className="confirm-token-title">Confirme o código de segurança.</h5>

      <p className="confirm-token-subtitle">
        Seu código de segurança foi enviado para o email cadastrado:{' '}
        {email ? <strong>{hideEmailUsername(email)}</strong> : null}
      </p>

      <p className="confirm-token-description">
        Isso ajuda a mostrar que essa conta é realmente pertence a você.
      </p>

      <If condition={isLoadingCheckVerification}>
        <Then>
          <SpinnerLoading size={32} />
        </Then>
        <Else>
          <InputPin size={6} autoFocus secret onFinish={handleVerification} />
        </Else>
      </If>

      <div
        className="resend-verification-container"
        onClick={counting ? () => {} : handleResendVerification}
      >
        <button
          type="button"
          style={{ cursor: counting ? 'not-allowed' : 'pointer' }}
        >
          Não recebi meu código de acesso {counting ? `${timeLeft}s` : ''}
        </button>
      </div>
    </S.Container>
  )
}
