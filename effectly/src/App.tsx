import { AppGrid } from "./App.styles";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import GlobalStyle from "./core/style/globalStyle";
import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <GlobalStyle />
      <AppGrid>
        <Header className="header" />
        <Calendar className="calendar" userId={currentUser?.uid} />
      </AppGrid>
    </>
  );
};

export default App;
