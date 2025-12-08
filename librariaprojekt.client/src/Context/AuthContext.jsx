import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Loading from '../Components/Loading';

export const AuthContext = createContext(null);

const getProtectedData = async () => {
    try {
        const response = await axios.get("https://localhost:7262/api/UserApi/status", { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return null; 
        }
        console.error('Error fetching protected data:', error);
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
                
            } catch (error) {
                    setUser(null);
                    setIsLoggedIn(false);
                console.error('Error checking auth status:', error);
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
            await axios.post("https://localhost:7262/api/UserApi/logout",
                {},
                { withCredentials: true });
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