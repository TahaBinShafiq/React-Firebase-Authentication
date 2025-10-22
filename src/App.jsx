import { AppProvider } from "./components/Provider"
import AppRoutes from "./components/routes"
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
