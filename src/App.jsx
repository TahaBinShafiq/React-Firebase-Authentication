import { Route, Routes , } from "react-router-dom"
import SignUp from "./components/signUp"
function App() {
  return (
    <Routes>
      <Route path="/React-Firebase-Authentication/" element={<Login />} />
      <Route path="/React-Firebase-Authentication/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
