import React, { createContext, useContext, useState } from "react";

// Create the context with default values
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null });   
    // console.log(auth)
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);