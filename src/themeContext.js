import { createContext } from "react";

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  });

export default ThemeContext;
