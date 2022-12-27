import { auth } from "./firebase/firebase";
import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <p>{`Main app, welcome ${currentUser?.uid}`}</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </>
  );
};

export default App;
