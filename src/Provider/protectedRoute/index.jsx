import { useContext, useEffect } from "react"
import { AuthContext } from "../../../Context/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom"

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { firebaseUser, loading } = useContext(AuthContext)
    const { uid } = firebaseUser || {}


    useEffect(() =>{
        if (!loading && !uid) {
            return navigate('/login')
        }
    }, [uid ,loading , navigate])


    if (loading) {
        return <div>Loading....</div>
    }
    console.log(uid)
    console.log(firebaseUser)
    console.log(loading)



    return (
        uid ? <>{children}</> : <Navigate to='/login' replace />
    )
}

export default ProtectedRoute