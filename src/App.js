import {
  Main
} from "./components";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";


const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
