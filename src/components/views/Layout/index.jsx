import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../../Context/ThemeProvider";


export default function DashboardLayout() {

    const {theme} = useContext(AppContext)
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        <Navbar/>
        <main className={theme === "dark" ? " bg-white text-black flex-1 p-6" : "bg-black text-white flex-1 p-6"}><Outlet /></main>
        <footer className="bg-gray-900 text-white text-center py-3">
          © 2025 Taha. All rights reserved.
        </footer>
      </div>
    </div>
  );
}