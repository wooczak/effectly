import GlobalStyle from "./core/style/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./core/style/theme/theme";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <SignIn />
        </ThemeProvider>
    );
};

export default App;
