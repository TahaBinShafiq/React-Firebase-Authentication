import {useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Navigate } from "react-router-dom";

function PublicRoute({children}){
    const {firebaseUser , loading} = useContext(AuthContext)
    const {uid} = firebaseUser || {}

    return(
        uid ? <Navigate to='/dashboard'/> : <>{children}</>
    )
}

export default PublicRoute