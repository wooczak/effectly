import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme/theme";

type ThemeType = typeof darkTheme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    * {
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Clash Grotesk', Helvetica, sans-serif;
        background-color: ${(props) => props.theme.bgPrimary};
        color: ${(props) => props.theme.text};
    };

    h1 { font-size: 3rem; font-family: 'Clash Display', sans-serif; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.3rem; }
    p { font-size: 1rem; }

`;

export default GlobalStyle;
