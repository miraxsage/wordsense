import "../css/app.css";
import IntroBook from "../fonts/IntroBook.woff2";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import MainLayout from "./Layouts/MainLayout";
import deepMerge from "./Utilities/Functions";
import CustomizationContextProvider from "./Layouts/CustomizationContextProvider";

const basicTheme = {
    typography: {
        fontFamily: "Intro",
        fontSize: 15,
        button: {
            fontSize: "1.1rem",
            textTransform: "none",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
      @font-face {
        font-family: Intro; 
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url("${IntroBook}"); 
      }  
      `,
        },
    },
};

const lightTheme = createTheme(
    deepMerge(basicTheme, {
        palette: {
            contrast: {
                light: "#a8a8a8",
                main: "#8e8e8e",
                dark: "#6b6b6b",
            },
            primary: {
                light: "#7464a2",
                main: "#5a4793",
                dark: "#3a316a",
            },
            secondary: {
                light: "#9acee1",
                main: "#57b0d9",
                dark: "#4489bb",
            },
            thirdary: {
                light: "#90d2c2",
                main: "#53c6b7",
                dark: "#42968b",
            },
        },
    }),
);

const darkTheme = createTheme(
    deepMerge(basicTheme, {
        palette: {
            mode: "dark",
            error: {
                main: "#d34d56",
            },
            contrast: {
                light: "#ececec",
                main: "#cdcdcd",
                dark: "#a2a2a2",
            },
            thirdary: {
                light: "#7464a2",
                main: "#5a4793",
                dark: "#3a316a",
            },
            secondary: {
                light: "#9acee1",
                main: "#57b0d9",
                dark: "#4489bb",
            },
            primary: {
                light: "#90d2c2",
                main: "#53c6b7",
                dark: "#42968b",
            },
        },
        components: {
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "#080b1e",
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: "#262939",
                    },
                },
            },
        },
    }),
);

createInertiaApp({
    resolve(name) {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        if (page.default.layout) return page;
        page.default.layout = (page) => <MainLayout target={name}>{page}</MainLayout>;
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <StyledEngineProvider injectFirst>
                <CustomizationContextProvider>
                    {(customSettings) => {
                        return (
                            <ThemeProvider
                                theme={customSettings.colorMode == "light" ? lightTheme : darkTheme}
                            >
                                <CssBaseline />
                                <App {...props} />
                            </ThemeProvider>
                        );
                    }}
                </CustomizationContextProvider>
            </StyledEngineProvider>,
        );
    },
});
