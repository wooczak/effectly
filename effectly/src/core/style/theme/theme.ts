import { commonColors, darkColors, lightColors } from "../variables/colors";

export interface themeDefaultElements {
    bgPrimary: string;
    bgSecondary: string;
    accent: string;
    text: string;
}

export const darkTheme: themeDefaultElements = {
    bgPrimary: darkColors.bgPrimary,
    bgSecondary: darkColors.bgSecondary,
    accent: darkColors.accent,
    text: darkColors.text,
    ...commonColors,
};

export const lightTheme: themeDefaultElements = {
    bgPrimary: lightColors.bgPrimary,
    bgSecondary: lightColors.bgSecondary,
    accent: lightColors.accent,
    text: lightColors.text,
    ...commonColors,
};
