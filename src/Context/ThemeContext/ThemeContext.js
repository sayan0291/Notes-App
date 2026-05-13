import React from "react";
const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return React.useContext(ThemeContext)
}