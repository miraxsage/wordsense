import '../css/app.css';
import IntroLight from '../fonts/IntroLight.woff2';
import IntroBook from '../fonts/IntroBook.woff2';
import { blue } from '@mui/material/colors';

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import { AnimatePresence } from 'framer-motion';
import ProfileLayout from './Layouts/ProfileLayout';

const theme = createTheme({
  palette: {
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
      dark: "#42968b"
    }
  },
  typography: {
    fontFamily: 'Intro',
    fontSize: 15,
    button: {
      fontSize: "1.1rem",
      textTransform: "none"
    }
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
});

createInertiaApp({
    resolve(name) {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        if(page.default.layout)
          return page;
          page.default.layout = (page => 
            <MainLayout target={name}>
                {page}          
            </MainLayout>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render((
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App {...props} />
            </ThemeProvider>
          </StyledEngineProvider>));
    },
});
