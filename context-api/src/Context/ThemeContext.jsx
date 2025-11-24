import { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  function ToggleTheme() {
    setTheme('ligth');
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
