import { signOut } from "firebase/auth";
import { auth } from "../../../config";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("User Logout")

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <button onClick={logout} className="border p-[7px] rounded-[5px] cursor-pointer">Logout</button>
    )
}

export default LogOutBtn