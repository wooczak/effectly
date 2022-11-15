import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme/theme";

type ThemeType = typeof darkTheme

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: 'Creato Display';
        src: local('CreatoDisplay'), url('../assets/fonts/CreatoDisplay-Light.otf') format('opentype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Creato Display';
        src: local('CreatoDisplay), url('../assets/fonts/CreatoDisplay-Regular.otf') format ('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Creato Display';
        src: local('CreatoDisplay), url('../assets/fonts/CreatoDisplay-ExtraBold.otf') format ('opentype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Creato Display';
        src: local('CreatoDisplay), url('../assets/fonts/CreatoDisplay-Black.otf') format ('opentype');
        font-weight: 800;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Creato Display, Helvetica, sans-serif;
        background-color: ${(props) => props.theme.bgPrimary};
        color: ${(props) => props.theme.text}
    };

`;

export default GlobalStyle;
