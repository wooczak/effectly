import { AppGrid } from "./App.styles";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import GlobalStyle from "./core/style/globalStyle";
import { ThemeProvider } from "styled-components";
import useCurrentUser from "./hooks/global/useCurrentUser";
import { useGlobalTheme } from "./store/theme/themeSlice";

const App = () => {
  const currentUser = useCurrentUser();
  const { theme } = useGlobalTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppGrid>
          <Header className="header" />
          <Calendar className="calendar" userId={currentUser?.uid} />
        </AppGrid>
      </ThemeProvider>
    </>
  );
};

export default App;
