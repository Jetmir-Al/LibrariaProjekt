import {useEffect, useState } from 'react';
import Loading from '../utils/Loading';
import { AuthContext } from "./AuthContext";
import { status, logoutFunc } from '../api/authApi';



const getProtectedData = async () => {
    try {
        const response = await status();
        return response;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuthStatus = async () => {
            try {

                const data = await getProtectedData();
                if (data) {
                    setUser(data);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);
                }

            } catch {
                setUser(null);
                setIsLoggedIn(false);
            }
            setLoading(false);

        }
        checkAuthStatus();
    }, []);

    if (loading) {
        return <Loading />;
    }

    const logout = async () => {
        try {
            await logoutFunc();
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );

}