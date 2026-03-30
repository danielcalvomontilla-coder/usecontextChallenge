import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ( {children } ) => {
    const [ theme, setTheme ] = useState ("light")
  const toggle = () => theme === "light" ? setTheme("dark") : setTheme("light")

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
    </ThemeContext.Provider>
  )

}