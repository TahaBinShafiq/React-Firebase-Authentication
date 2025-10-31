import { useContext } from "react";
import { AppContext } from "../../../../Context/ThemeProvider";


export default function Navbar() {

    const {theme} = useContext(AppContext)
    console.log(theme)
    return (
        <header className={theme === "dark" ? "bg-balck text-black border-black shadow p-4 flex justify-between items-center" : "bg-black text-white border-black shadow p-4 flex justify-between items-center"   } >
            <h2 className={ theme === "dark" ? "text-xl text-black " :"text-white font-semibold text-xl"}>Dashboard Overview</h2>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-3 py-1"
                />
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </header>
    );
}