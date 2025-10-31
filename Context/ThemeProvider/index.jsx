import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  });

  useEffect(() =>{
    localStorage.setItem("theme" , theme)
  }, [theme])

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log(theme)
  };

  return (
    <AppContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default {ThemeProvider}