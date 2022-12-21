import useCurrentUser from "./hooks/global/useCurrentUser";

const App = () => {
  useCurrentUser();

  return <p>Main app</p>;
};

export default App;
