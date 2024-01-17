import { createContext, useContext, useReducer } from "react";
import { getCookie, setCookie } from "../Utilities/Cookie";

const CustomizationContext = createContext();

function useCustomSetting(name) {
    let context = useContext(CustomizationContext);
    return [context[name], (newVal) => context.update({ [name]: newVal })];
}

export function useLanguage() {
    return useCustomSetting("language");
}

export function useColorMode() {
    return useCustomSetting("colorMode");
}

export function useIsLighMode() {
    return useColorMode()[0] == "light";
}

export default function CustomizationContextProvider({ children }) {
    let config = [
        {
            name: "language",
            value: getCookie("lang") ?? "en",
            setter: function (oldLang, newLang) {
                if (!newLang.match(/^ru|en$/)) newLang = "en";
                if (newLang != oldLang)
                    setCookie("lang", newLang, { "max-age": Number.MAX_SAFE_INTEGER });
                return newLang;
            },
        },
        {
            name: "colorMode",
            value: localStorage.getItem("colorMode") ?? "light",
            setter: (oldColorMode, newColorMode) => {
                if (!newColorMode.match(/^light|dark$/)) newColorMode = "light";
                if (newColorMode != oldColorMode) localStorage.setItem("colorMode", newColorMode);
                return newColorMode;
            },
        },
    ];

    let [customSettings, updateSettings] = useReducer(
        (oldVal, newVal) => {
            return {
                ...oldVal,
                ...Object.entries(newVal).reduce((prev, cur) => {
                    let c = config.find((c) => c.name == cur[0]);
                    if (!c) return prev;
                    return Object.assign(prev, {
                        [c.name]: c.setter(oldVal[c.name], newVal[c.name]),
                    });
                }, {}),
            };
        },
        config.reduce((prev, cur) => Object.assign(prev, { [cur.name]: cur.value }), {}),
    );

    let contextValue = { ...customSettings, update: updateSettings };

    return (
        <CustomizationContext.Provider value={contextValue}>
            {typeof children == "function" ? children(contextValue) : children}
        </CustomizationContext.Provider>
    );
}
