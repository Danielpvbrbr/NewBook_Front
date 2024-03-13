/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [route, setRoute] = useState({ route: "initial", data: {} });

    return (
        <AuthContext.Provider value={{
            route,
            setRoute
        }}>
            {children}
        </AuthContext.Provider>
    )
}