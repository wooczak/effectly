import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./core/style/theme/theme";
import GlobalStyle from "./core/style/globalStyle";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
