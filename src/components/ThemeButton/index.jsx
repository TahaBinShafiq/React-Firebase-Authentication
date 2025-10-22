import { useContext } from "react"
import { AppContext } from "../Provider"
import MoonSvg from "../../assets/MoonSvg"
import SunSvg from "../../assets/SunSvg"

function ThemeBtn() {

    const { theme, handleTheme } = useContext(AppContext)
    return (
        <button onClick={handleTheme} className={theme === "dark" ? "bg-gray-300 text-black px-5 py-2 rounded-[5px] cursor-pointer" : "bg-gray-900 text-white  px-5 py-2 rounded-[5px] cursor-pointer"}>
            {theme === "light" ? <MoonSvg /> : <SunSvg />}
        </button>
    )
}

export default ThemeBtn