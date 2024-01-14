import { createContext, useContext, useState } from "react";

const ColorModeContext = createContext();

export function useColorMode() {
    return useContext(ColorModeContext);
}

export function useSetColorMode(newMode) {
    let contextValue = useColorMode();
    if (!contextValue) return;
    let [mode, setMode] = contextValue;
    if (newMode != mode) setMode(newMode);
}

export default function ColorModeContextProvider({ children }) {
    let colorMode = localStorage.getItem("colorMode") ?? "light";
    let [mode, setMode] = useState(colorMode);
    let changeMode = (newMode) => {
        if (!newMode.match(/^light|dark$/)) newMode = "light";
        if (newMode != mode) {
            localStorage.setItem("colorMode", newMode);
            setMode(newMode);
        }
    };
    return (
        <ColorModeContext.Provider value={[mode, changeMode]}>
            {typeof children == "function" ? children(mode, changeMode) : children}
        </ColorModeContext.Provider>
    );
}
