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

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff0000",
      main: "#5643a2",
      dark: "#3c2c7c",
    },
    secondary: {
      light: "#7fc2ac",
      main: "#259a85",
      dark: "#2a9068",
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
        if(name.startsWith("Auth/"))
          page.default.layout = (page => 
            <MainLayout target={name}>
                <AuthLayout target={name}>
                  {page}
                </AuthLayout>            
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
