import { useContext } from "react";
import AppRoutes from "./components/routes"
import { AppContext } from "../Context/ThemeProvider";
function App() {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div className={theme === "light" ? "bg-black text-white h-screen" : "bg-white text-black h-screen"}>
      <AppRoutes />
    </div>

  )
}

export default App
