import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client/react";
import client from "./gql";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTopOnRouteChange } from "./utils/ScrollToTop";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

import theme from "./theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <SnackbarProvider
          autoHideDuration={2000}
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          preventDuplicate
        >
          <CssBaseline />
          <BrowserRouter
            getUserConfirmation={(message, callback) => {
              // this is the default behavior
              const allowTransition = window.confirm(message);
              callback(allowTransition);
            }}
          >
            <ScrollToTopOnRouteChange></ScrollToTopOnRouteChange>

            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
