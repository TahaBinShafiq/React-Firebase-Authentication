import { Route, Routes } from "react-router-dom";
import SignUp from "../signUp";
import Login from "../Login";
import HeroSec from "../MainPage/HeroSection";
import ProtectedRoute from "../../Provider/protectedRoute";
import PublicRoute from "../../Provider/PublicRoute";

function AppRoutes() {
    return (
        <Routes >
            <Route path="/" element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/dashboard" element={<HeroSec />} />
        </Routes>
    )
}

export default AppRoutes