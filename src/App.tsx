import 'react-toastify/dist/ReactToastify.min.css'

import { ThemeProvider } from 'styled-components'
import Routes from './routes/root.routes'
import GlobalStyle from './styles/css/global'
import { ToastContainer, toast as toastAction } from 'react-toastify'
import * as toast from './components/Toast/Toast.index'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './query'

const App = () => {
  window.addEventListener('online', () => {
    toastAction.dismiss()
    setTimeout(() => {
      toast.Success({
        title: 'Você está online novamente!',
        autoClose: false,
      })
    }, 1000)
  })

  window.addEventListener('offline', () => {
    toast.Error({
      title: 'Você está offline!',
      autoClose: false,
    })
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <ToastContainer
          bodyClassName="body-toastify"
          toastClassName="custom-toastify"
          hideProgressBar
        />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
