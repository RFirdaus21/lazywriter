import { createContext } from "react";

//not finished yet
export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}