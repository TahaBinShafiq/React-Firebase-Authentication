import { Route, Routes } from "react-router-dom";
import SignUp from "../signUp";
import Login from "../Login";
import HeroSec from "../MainPage/HeroSection";
import ProtectedRoute from "../../Provider/protectedRoute";
import PublicRoute from "../../Provider/PublicRoute";
import DashboardLayout from "../views/Layout";
import Settings from "../settings";
import Analytics from "../analytics";
import ThemePage from "../ThemePage/theme";

function AppRoutes() {
    return (
        <Routes >
            <Route path="/" element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route element={<DashboardLayout />}>
                <Route path="dashboard" element={<ProtectedRoute><HeroSec /></ProtectedRoute>} />
                <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path="analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                <Route path="theme" element={<ProtectedRoute><ThemePage/></ProtectedRoute>} />
            </Route >
        </Routes>
    )
}

export default AppRoutes