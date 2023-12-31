import { toast, CloseButtonProps } from 'react-toastify'
import * as S from './Toast.styled'
import { ToastComponentProps } from './Toast.types'
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon'
import CloseIcon from '../../assets/icons/CloseIcon'
import ErrorIcon from '../../assets/icons/ErrorIcon'
import InfoIcon from '../../assets/icons/InfoIcon'
import WarningIcon from '../../assets/icons/WarningIcon'

const ToastComponent = ({ title, subtitle }: ToastComponentProps) => {
  return (
    <S.Container>
      <p className="toast-title">{title}</p>
      {typeof subtitle === 'string' ? (
        <p className="toast-subtitle">{subtitle}</p>
      ) : (
        subtitle
      )}
    </S.Container>
  )
}

const CloseButton = ({ closeToast }: CloseButtonProps) => (
  <S.CloseButtonContainer onClick={closeToast}>
    <p className="close-text">FECHAR</p>
    <CloseIcon width={16} height={16} />
  </S.CloseButtonContainer>
)

export const Error = (props: ToastComponentProps) => {
  toast.error(
    () => {
      return (
        <ToastComponent
          key={props.title}
          title={props.title}
          subtitle={props.subtitle}
        />
      )
    },
    {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: props.title,
      closeButton: CloseButton,
      icon: <ErrorIcon width={16} height={16} color="#DE0C0C" />,
      ...props,
    },
  )
}

export const Success = (props: ToastComponentProps) => {
  toast.success(
    () => {
      return (
        <ToastComponent
          key={props.title}
          title={props.title}
          subtitle={props.subtitle}
        />
      )
    },
    {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: props.title,
      closeButton: CloseButton,
      icon: <CheckCircleIcon width={16} height={16} color="#008146" />,
      ...props,
    },
  )
}

export const Info = (props: ToastComponentProps) => {
  toast.info(
    () => {
      return (
        <ToastComponent
          key={props.title}
          title={props.title}
          subtitle={props.subtitle}
        />
      )
    },
    {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: props.title,
      closeButton: CloseButton,
      icon: <InfoIcon width={16} height={16} color="#1665D8" />,
      ...props,
    },
  )
}

export const Warning = (props: ToastComponentProps) => {
  toast.warning(
    () => {
      return (
        <ToastComponent
          key={props.title}
          title={props.title}
          subtitle={props.subtitle}
        />
      )
    },
    {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: props.title,
      closeButton: CloseButton,
      icon: <WarningIcon width={16} height={16} color="#B4AD09" />,
      ...props,
    },
  )
}
