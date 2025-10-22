import { button, buttonGroup } from "@heroui/theme";

function ThemeBtn({onClick,text}){
    return(
        <button onClick={onClick} className="border border-black px-5 py-2 rounded-[5px] cursor-pointer">{text}</button>
    )
}

export default ThemeBtn