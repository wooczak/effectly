import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  const currentUser = useCurrentUser();

  return <p>{`Main app, welcome ${currentUser.email}`}</p>;
};

export default App;
