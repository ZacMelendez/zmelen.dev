import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: true,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      document.documentElement.style.setProperty('--background', 'rgb(233, 233, 233)');
      document.documentElement.style.setProperty('--content', 'rgb(26, 26, 26)');
      return { darkMode: false };
    case "DARKMODE":
      document.documentElement.style.setProperty('--content', 'rgb(233, 233, 233)');
      document.documentElement.style.setProperty('--background', 'rgb(26, 26, 26)');
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}
