import { useContext } from "react";
import { ToggleLightDarkContext } from "../context/toggleContext";

export const useLightDarkHook = () => {
    const context = useContext(ToggleLightDarkContext);
    if (!context) {
        throw new Error("Problem with context!");

    }
    return context;
}