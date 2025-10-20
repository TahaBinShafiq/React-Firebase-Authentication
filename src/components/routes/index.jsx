import { Route, Routes } from "react-router-dom";
import SignUp from "../signUp";
import Login from "../Login";

function AppRoutes(){
    return(
        <Routes >
            <Route path="/" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default AppRoutes