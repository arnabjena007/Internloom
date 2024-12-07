'use client'; // Mark the file as a client-side component

import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // user is null initially

    const login = (userData) => {
        setUser(userData); // Set user data when logging in
    };

    const logout = () => {
        setUser(null); // Clear user data when logging out
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext); // Use context to access authentication state and functions
};
