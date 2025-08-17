import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { theme } from '@theme';

import { BrowserRoutes } from './router/BrowserRoutes';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRoutes />
        </ThemeProvider>
    </StrictMode>,
);
