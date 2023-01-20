import { AppGrid } from "./App.styles";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <AppGrid>
        <Header className="header" />
        <Calendar className="calendar" userId={currentUser?.uid} />
      </AppGrid>
    </>
  );
};

export default App;
