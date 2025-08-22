import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

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
