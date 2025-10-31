import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthProvider"
import { Navigate } from "react-router-dom"

function ProtectedRoute({children}){
    const {firebaseUser , loading} = useContext(AuthContext)
    const {uid} = firebaseUser || {}
    console.log(uid)
    console.log(firebaseUser)
    return(
        uid ? <>{children}</> : <Navigate to='/login' replace/>
    )
}

export default ProtectedRoute