import { commonColors, darkColors, lightColors } from "../variables/colors";

export interface themeDefaultElements {
    name: string,
    bgPrimary: string;
    bgSecondary: string;
    accent: string;
    text: string;
}

export const darkTheme: themeDefaultElements = {
    name: 'darkTheme',
    bgPrimary: darkColors.bgPrimary,
    bgSecondary: darkColors.bgSecondary,
    accent: darkColors.accent,
    text: darkColors.text,
    ...commonColors,
};

export const lightTheme: themeDefaultElements = {
    name: 'lightTheme',
    bgPrimary: lightColors.bgPrimary,
    bgSecondary: lightColors.bgSecondary,
    accent: lightColors.accent,
    text: lightColors.text,
    ...commonColors,
};
