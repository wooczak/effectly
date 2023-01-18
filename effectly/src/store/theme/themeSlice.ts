import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../core/style/theme/theme";
import { Theme, ThemeRootState } from "./types";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: darkTheme,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.theme = darkTheme;
    },
    toggleLightTheme: (state) => {
      state.theme = lightTheme;
    },
  },
});

export const { toggleDarkTheme, toggleLightTheme } = themeSlice.actions;

export const useGlobalTheme = () =>
  useSelector<ThemeRootState, Theme>((props) => props.theme);

export default themeSlice.reducer;
