import { AppGrid } from "./App.styles";
import Calendar from "./components/Calendar/Calendar";
import { auth } from "./firebase/firebase";
import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  const currentUser = useCurrentUser();

  return (
    <AppGrid>
      <button onClick={() => auth.signOut()}>sign out</button>
      <Calendar className="calendar" userId={currentUser?.uid} />
    </AppGrid>
  );
};

export default App;
