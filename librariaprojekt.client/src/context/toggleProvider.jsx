import { useState } from "react";
import { ToggleLightDarkContext } from "./toggleContext";



export const ToggleLightDarkProvider = ({ children }) => {
    const [mode, setMode] = useState(false);
    const toggleMode = () => {
        setMode(m => !m);
    };

    return (
        <ToggleLightDarkContext.Provider
            value={{
                mode,
                toggleMode,
            }}>
            {children}
        </ToggleLightDarkContext.Provider>
    );
} 