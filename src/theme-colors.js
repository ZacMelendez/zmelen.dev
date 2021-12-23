export const themes = {
    light: {
        background: 'rgb(233, 233, 233)',
        content: 'rgb(26, 26, 26)',
    },
    dark: {
        background: 'rgb(26, 26, 26)',
        content: 'rgb(233, 233, 233)',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);