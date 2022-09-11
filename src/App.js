import { GlobalStyle } from "./style";
import './fix.css'
import ApiClientProvider from "./application/ApiClientProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {

  return (
    <ApiClientProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApiClientProvider>
  );
}

export default App;
