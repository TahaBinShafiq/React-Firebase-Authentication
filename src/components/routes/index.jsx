import { Route, Routes } from "react-router-dom";
import SignUp from "../signUp";
import Login from "../Login";
import HeroSec from "../MainPage/HeroSection";

function AppRoutes(){
    return(
        <Routes >
            <Route index element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<HeroSec />}/>
        </Routes>
    )
}

export default AppRoutes