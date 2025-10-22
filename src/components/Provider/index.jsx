import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

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

export default {AppProvider}