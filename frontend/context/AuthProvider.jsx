import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const init = localStorage.getItem("Users");

    // Check if init is null or undefined, and handle accordingly
    const [authUser, setAuthUser] = useState(() => {
        try {
            // Attempt to parse the data, fallback to null if it fails
            return init ? JSON.parse(init) : null;
        } catch (error) {
            console.error("Error parsing stored user data:", error.message);
            return null;
        }
    });

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
