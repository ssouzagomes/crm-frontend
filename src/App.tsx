import { ThemeProvider } from "styled-components";
import Routes from "./routes/root.routes";
import GlobalStyle from "./styles/css/global";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
