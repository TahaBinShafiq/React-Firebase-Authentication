import { createContext, useEffect, useState } from "react";
import { auth } from "../../config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setFirebaseUser(user)
                console.log("This user is currently login", user)
                // ...
            } else {
                setFirebaseUser(null)
            }
            setLoading(false)
        });
        return unSubscribe
    }, [])

    return (
        <AuthContext.Provider value={{ firebaseUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

