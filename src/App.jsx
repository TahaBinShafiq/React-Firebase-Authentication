import { useContext } from "react";
import { AppContext, AppProvider } from "./components/Provider"
import AppRoutes from "./components/routes"
function App() {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div className={theme === "light" ? "bg-black text-white h-screen" : "bg-white text-black h-screen"}>
      <AppRoutes />
    </div>

  )
}

export default App
