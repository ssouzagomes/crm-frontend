import { ThemeProvider } from 'styled-components'
import Routes from './routes/root.routes'
import GlobalStyle from './styles/css/global'

const App = () => {
  window.addEventListener('online', () => {
    // toastAction.dismiss();
    // setTimeout(() => {
    //   toast.Success({
    //     title: 'Você está online novamente!',
    //   });
    // }, 1000);

    console.log('Você está online novamente!')
  })

  window.addEventListener('offline', () => {
    // toast.Error({
    //   title: 'Você está offline!',
    //   autoClose: false,
    //   closeButton: true,
    // });

    console.log('Você está offline!')
  })

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
